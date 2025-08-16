import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
   useEffect(() => {
      document.title = "CHERRI | WISHLIST";  
    }, []);
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveAllToPayment = () => {
    wishlist.forEach((item) => {
      addToCart({
        ...item,
        quantity: item.quantity || 1,
        selectedWeight: item.selectedWeight || "1 KG",
      });
    });
    navigate("/payment"); 
  };

  return (
    <section className="mt-20 md:mt-44 lg:mt-28 bg-[#FFF8F0] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        
        <div className="flex justify-end gap-3 mb-6">
          {wishlist.length > 0 && (
            <>
              <button
                onClick={clearWishlist}
                className="px-4 py-2 bg-[#F3E5AB] rounded-full font-semibold text-black"
              >
                REMOVE ALL
              </button>

              <button
                onClick={handleMoveAllToPayment}
                className="px-4 py-2 border border-[#F3E5AB] rounded-full font-semibold text-black"
              >
                NEXT
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md relative flex flex-col"
              >
                <Link to={`/product/${item.id}`} className="flex-1">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </Link>

                <div
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md border border-gray-300 hover:bg-[#D99A6C] hover:text-white transition-colors cursor-pointer"
                >
                  <FaHeart className="text-red-500" />
                </div>

                <div className="p-3 bg-[#F3E5AB]">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm">
                    FROM: ₹{item.price}{" "}
                    <span className="text-xs">PER KG</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Your wishlist is empty.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
