import React from "react";
import { LogOut } from "lucide-react";

const Header = (props) => {
  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

      <div>
        <p className="text-gray-400 text-sm">Welcome back,</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-1">
          {props.data?.firstName}
          <span className="ml-2 inline-block animate-wave">👋</span>
        </h1>
      </div>

      <button
        onClick={logOut}
        className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105 cursor-pointer active:scale-95 transition-all duration-300 px-5 py-2.5 rounded-xl shadow-lg font-semibold"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default Header;
