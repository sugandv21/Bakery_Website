import React, { useEffect , useState } from "react";
import AuthTabs from "../components/AuthTabs";
import Login from "../components/Login";
import Register from "../components/Register";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
    useEffect(() => {
      document.title = "CHERRI | lOGIN | REGISTER";  
    }, []);

  return (
    <div className="mt-24 md:mt-56 lg:mt-40 max-w-5xl mx-auto rounded-lg overflow-hidden bg-[#FFF8F0]">
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "login" ? (
        <Login setActiveTab={setActiveTab} />
      ) : (
        <Register setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
