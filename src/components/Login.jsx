import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cake from "../assets/images/imagelogin.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login({ setActiveTab }) {
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lostPassModal, setLostPassModal] = useState(false);
  const [resetStep, setResetStep] = useState(1);
  const [emailForReset, setEmailForReset] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    storedUser &&
    storedUser.email === formData.email &&
    storedUser.password === formData.password
  ) {
    login({
      firstName: storedUser.firstName,
      lastName: storedUser.lastName,
      email: storedUser.email,
    });

    localStorage.setItem("isLoggedIn", "true");
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
  } else {
    alert("Invalid email or password!");
  }
};


  const handleLostPasswordEmail = () => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (storedUser && storedUser.email === emailForReset) {
      setResetStep(2);
    } else {
      alert("User not registered!");
    }
  };

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    let storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    storedUser.password = newPassword;
    localStorage.setItem("registeredUser", JSON.stringify(storedUser));
    alert("Password updated successfully! Please login with your new password.");
    setLostPassModal(false);
    setResetStep(1);
    setEmailForReset("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // useEffect(() => {
  //   if (location.state?.fromPayment) {
  //     localStorage.setItem(
  //       "redirectAfterLogin",
  //       JSON.stringify({ path: "/payment", state: location.state.paymentState })
  //     );
  //   }
  // }, [location.state]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-6 p-6"
      >
        <div className="w-full md:w-1/2 space-y-4">
          <label className="block font-medium">E-Mail</label>
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
            <span
              onClick={togglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[#E57F35] transition-colors duration-200"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F4D03C] mt-5 cursor-pointer text-white text-3xl py-4 rounded-3xl font-bold"
          >
            Login
          </button>

          <p
            className="text-lg font-bold text-[#E57F35] cursor-pointer"
            onClick={() => setLostPassModal(true)}
          >
            Lost Your Password
          </p>

          <p className="text-lg font-bold">
            Don't Have An Account?{" "}
            <span
              onClick={() => setActiveTab("register")}
              className="text-[#E57F35] font-bold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>

        <div className="w-full md:w-1/2 flex mb-1 md:mb-10 mt-6 md:mt-10 mx-10 justify-center md:justify-end">
          <div className="bg-gradient-to-br from-[#E57F35] to-[#D99A6C] p-4 md:p-12 mb-4 rounded-xl transform rotate-[-15deg]">
            <img src={cake} alt="Cake" className="rounded-lg w-full h-52 md:h-62" />
          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600">Login Successful!</h2>
              <p className="mt-2">Redirecting...</p>
            </div>
          </div>
        )}
      </form>

      {lostPassModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {resetStep === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4">Reset Password</h2>
                <input
                  type="email"
                  value={emailForReset}
                  onChange={(e) => setEmailForReset(e.target.value)}
                  placeholder="Enter your registered email"
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setLostPassModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLostPasswordEmail}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {resetStep === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">Set New Password</h2>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full p-2 border rounded mb-3"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setLostPassModal(false);
                      setResetStep(1);
                    }}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePasswordReset}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Update
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
