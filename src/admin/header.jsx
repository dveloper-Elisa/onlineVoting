import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const logout = () => {
    localStorage.clear("yourKey");
    navigation("/");
  };

  return (
    <div className="flex flex-row gap-5 md:flex md:flex-row lg:flex lg:flex-row bg-teal-800 p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <img
          src="/RP_Log.png"
          alt="rpLogo"
          className="w-20 h-10 md:w-30 md:h-20 lg:w-40 lg:h-30"
        />
        <p className="md:text-[20px] lg:text-[2rem] text-[10px] text-white font-bold tracking-wider">
          IPRC NGOMA SU SMART VOTING
        </p>
      </div>
      <div className="flex">
        <button
          onClick={logout}
          className="bg-green-500 border border-green-800 hover:bg-teal-800 hover:border hover:border-white text-white font-bold p-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
