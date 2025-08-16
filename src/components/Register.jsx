import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cake from "../assets/images/imagelogin.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    terms: false,
  });

  const { register } = useAuth(); 
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateName = (name) => /^[A-Za-z]+$/.test(name);
const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateName(formData.firstName) || !validateName(formData.lastName)) {
    alert("Names should not contain numbers or special characters.");
    return;
  }

  if (formData.password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (storedUser && storedUser.email === formData.email) {
    setModalMessage("User already registered!");
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 2000);
    return;
  }

  localStorage.setItem("registeredUser", JSON.stringify(formData));

  register({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
  });

  localStorage.setItem("isLoggedIn", "true");

  setModalMessage("Registration Successful! Redirecting...");
  setModalOpen(true);

  setTimeout(() => {
    setModalOpen(false);

    const redirectData = JSON.parse(localStorage.getItem("redirectAfterLogin"));
    if (redirectData?.state && redirectData?.path) {
      navigate(redirectData.path, { state: redirectData.state });
      localStorage.removeItem("redirectAfterLogin"); 
    } else {
      navigate("/"); 
    }
  }, 2000);
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="bg-gradient-to-br from-[#E57F35] to-[#D99A6C] p-4 md:p-12 mb-4 rounded-xl transform rotate-[-10deg]">
          <img src={cake} alt="Cake" className="rounded-lg w-full h-52 md:h-62" />
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 space-y-4">
        <label className="block font-medium mt-2">E-Mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your E-Mail"
          className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
          required
        />

        <label className="block font-medium">Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2 pr-12"
            required
          />
          <span onClick={togglePassword} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[#E57F35] transition-colors duration-200">
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="w-7 h-7 border-2 border-[#992323A6]"
            required
          />
          <p className="text-xl font-semibold">
            I Have Read And Agree To The{" "}
            <span className="text-[#E57F35] cursor-pointer">Terms</span> And{" "}
            <span className="text-[#E57F35] cursor-pointer">Privacy Policy</span>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F4D03C] mt-5 mb-5 cursor-pointer text-white text-3xl py-4 rounded-3xl font-bold"
        >
          Register
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2
              className={`text-2xl font-bold ${
                modalMessage.includes("Successful") ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalMessage}
            </h2>
          </div>
        </div>
      )}
    </form>
  );
}
