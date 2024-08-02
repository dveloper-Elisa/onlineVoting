import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-5 md:flex md:flex-row lg:flex lg:flex-row bg-teal-800 p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <img src="/RP_Log.png" alt="rpLogo" className="w-30 h-20" />
        <p className="md:text-[20px] lg:text-[2rem] text-white font-bold tracking-wider">
          IPRC NGOMA SU SMART VOTING
        </p>
      </div>
      <nav>
        <ol className="flex flex-row gap-5 capitalize font-bold text-white tracking-widest">
          <a
            href="#"
            className=" hover:bg-green-500 bg-green-700 p-2 rounded-md"
          >
            <li>home</li>
          </a>
          <a
            href="/candidates"
            className=" hover:bg-green-500 bg-green-700 p-2 rounded-md"
          >
            <li>candidates</li>
          </a>
          <a
            href="#"
            className=" hover:bg-green-500 bg-green-700 p-2 rounded-md"
          >
            <li>posts</li>
          </a>
          <a
            href="/addcandidate"
            className=" hover:bg-green-500 bg-green-700 p-2 rounded-md"
          >
            <li>Register candidate</li>
          </a>
        </ol>
      </nav>
      <div className="flex">
        <button className="bg-green-500 border border-green-800 hover:bg-teal-800 hover:border hover:border-white text-white font-bold p-2 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
