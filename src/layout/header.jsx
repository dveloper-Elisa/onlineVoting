import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.clear("yourKey");
      localStorage.clear("voterId");
      navigation("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-5 md:flex md:flex-row lg:flex lg:flex-row bg-teal-800 p-2 items-center justify-between">
      <link rel="stylesheet" href="../css/fontawesome.css" />
      <div className="flex flex-row items-center gap-1">
        <img
          src="/RP_Log.png"
          alt="rpLogo"
          className="w-30 h-10 bg-slate-300"
        />
        <p className="md:text-[20px] text-white font-bold tracking-wider">
          IPRC NGOMA SU SMART VOTING
        </p>
      </div>
      <nav className="flex flex-row gap-2 ">
        <ol className="flex flex-row gap-5 capitalize font-bold text-white tracking-widest">
          <a
            href="/candidates"
            className=" hover:bg-green-500 bg-green-700 p-2 rounded-md"
          >
            <li>candidates</li>
          </a>
        </ol>
        <div className="flex">
          <button
            onClick={handleLogout}
            className="bg-green-500 border border-green-800 hover:bg-teal-800 hover:border hover:border-white text-white font-bold p-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
