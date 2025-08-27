import React from "react";

const Header = (props ) => {
  const logOut = () => {
   localStorage.removeItem("loggedInUser"); // remove instead of setting blank string
  // window.location.reload(); // optional, reload for now
    props.changeUser(null); // call changeUser with null to reset user state
  };

  return (
    <div className="text-white flex items-center justify-between mb-6">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold text-green-400">
          {props.data.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
