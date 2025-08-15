import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import logImg from "../assets/images/auth3.png";
import loginImage from "../assets/images/auth2.png";
import regist from "../assets/images/auth4.png";
import registImg from "../assets/images/auth1.png";

export default function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex w-full">
      <button
        onClick={() => setActiveTab("login")}
        className={`flex items-center justify-center cursor-pointer gap-2 w-1/2 py-4 mx-3 text-lg font-bold transition-all relative ${
          activeTab === "login" ? "z-20 text-white" : "z-30 text-[#E57F35]"
        }`}
        style={{
          backgroundImage: `url(${activeTab === "login" ? logImg : loginImage})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FaSignInAlt />
        Login
      </button>

      <button
        onClick={() => setActiveTab("register")}
        className={`flex items-center justify-center cursor-pointer gap-2 w-1/2 py-4 text-lg font-bold transition-all relative ${
          activeTab === "register" ? "z-20  text-white" : "z-10 text-[#E57F35]"
        }`}
        style={{
          backgroundImage: `url(${activeTab === "register" ? registImg : regist})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          marginLeft: "-40px", 
        }}
      >
        <FaUser />
        Register
      </button>
    </div>
  );
}

