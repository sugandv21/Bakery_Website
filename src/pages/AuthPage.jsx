import React, { useState } from "react";
import AuthTabs from "../components/AuthTabs";
import Login from "../components/Login";
import Register from "../components/Register";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="mt-40 max-w-5xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "login" ? <Login /> : <Register />}
    </div>
  );
}
