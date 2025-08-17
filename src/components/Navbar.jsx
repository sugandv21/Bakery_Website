import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { products } from "../pages/ProductsSection"; 
import logo from "../assets/images/logo.png";
import heartIcon from "../assets/images/heart.png";
import bellIcon from "../assets/images/bell.png";
import cartIcon from "../assets/images/bag.png";
import searchIcon from "../assets/images/search.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  const handleBellClick = () => {
    const delivery = localStorage.getItem("expectedDelivery");
    if (delivery) alert(`Your expected delivery date is: ${delivery}`);
    else alert("No new notifications");
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const foundProduct = products.find(
      (p) => p.title.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundProduct) {
      navigate(foundProduct.link);
      setSearchTerm("");
    } else {
      setShowModal(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const navLabels = ["HOME", "ABOUT US", "OUR PRODUCTS", "BLOG", "CONTACT US"];
  const navPaths = ["/", "/about", "/products", "/blog", "/contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#D79666] px-4 sm:px-10 md:px-16 lg:px-20 py-4 z-[9999]">
        {/* Main Grid - Desktop & Tablet */}
        <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center gap-x-4">
          <div className="flex items-center">
            <img src={logo} alt="Cherii Logo" className="h-16 sm:h-20 w-auto" />
          </div>

          <div className="flex flex-col items-center w-full gap-2">
            <ul className="flex justify-center gap-4 lg:gap-6 text-lg sm:text-xl w-full z-50 flex-wrap">
              {navPaths.map((path, idx) => (
                <li key={idx}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-3 py-1 text-black font-semibold whitespace-nowrap hover:underline hover:decoration-black ${
                        isActive ? "underline decoration-black" : ""
                      }`
                    }
                  >
                    {navLabels[idx]}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-2 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[550px]">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
                <img
                  src={searchIcon}
                  alt="search"
                  className="w-4 h-4 mr-3 sm:mr-10 cursor-pointer"
                  onClick={handleSearch}
                />
                <input
                  type="text"
                  placeholder="SEARCH HERE"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="outline-none text-sm w-full placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <Link to="/wishlist" className="relative">
                <img src={heartIcon} alt="wishlist" className="w-7 h-7" />
              </Link>
              <div className="relative cursor-pointer" onClick={handleBellClick}>
                <img src={bellIcon} alt="notifications" className="w-7 h-7" />
              </div>
              <Link to="/cart" className="relative">
                <img src={cartIcon} alt="cart" className="w-7 h-7" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <div className="mt-2">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-[#F4d03c] text-black font-bold px-4 py-2 rounded-full shadow-md"
                  >
                    Hello, {user.firstName}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded-md"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-[#FAD94A] text-black font-bold px-12 py-2 rounded-full shadow-md">
                    LOGIN
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center mt-2">
          <img src={logo} alt="Cherii Logo" className="h-10 w-auto" />
          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 space-y-3">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
              <img
                src={searchIcon}
                alt="search"
                className="w-4 h-4 mr-3 cursor-pointer"
                onClick={handleSearch}
              />
              <input
                type="text"
                placeholder="SEARCH HERE"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="outline-none text-sm w-full placeholder-gray-400"
              />
            </div>

            <ul className="flex flex-col gap-3 text-black font-semibold mt-2">
              {navPaths.map((path, idx) => (
                <li key={idx}>
                  <NavLink to={path} onClick={() => setMenuOpen(false)}>
                    {navLabels[idx]}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-3 gap-4">
              <Link to="/wishlist">
                <img src={heartIcon} alt="wishlist" className="w-6 h-6" />
              </Link>
              <img src={bellIcon} alt="notifications" className="w-6 h-6" />
              <Link to="/cart" className="relative">
                <img src={cartIcon} alt="cart" className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link to="/login">
                <button className="bg-[#FAD94A] text-black font-bold px-4 py-2 rounded-full shadow-md">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

    {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
      <h2 className="text-lg font-bold text-red-500 mb-2">No Items Found</h2>
      <p className="text-gray-600 mb-4">
        We couldn’t find any product matching "{searchTerm}".
      </p>

      {products.length > 0 && (
  <div className="mb-4 text-left">
    <h3 className="text-sm font-semibold text-gray-700 mb-1">
      Available Products:
    </h3>
    <ul className="list-disc list-inside text-blue-600">
      {products.map((p) => (
        <li key={p.id || p.title}>
          <Link
            to={p.link}  
            className="hover:underline"
            onClick={() => setShowModal(false)}
          >
            {p.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

      <button
        onClick={() => setShowModal(false)}
        className="bg-[#E57F35] text-white px-4 py-2 rounded-full hover:bg-[#c96c2d]"
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;

