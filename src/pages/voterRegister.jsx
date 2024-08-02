import React from "react";

const VoterSignup = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center border border-green-800 rounded-md p-2 w-80">
        <div>
          <img
            src="/RP_Log.png"
            alt="RP LOGO"
            className="w-48 h-40 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-bold tracking-wider text-[1.5rem]">Voter Signup</p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Full names"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your regNumber"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Your password"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm password"
              className="p-2 border-green-800 border rounded-md"
            />
            <button className="bg-green-500 hover:bg-teal-800 text-white font-bold p-2 rounded-md tracking-wide">
              Signup
            </button>
            <p>
              Already have accound please Login{" "}
              <a href="/login" className="text-blue-800 hover:text-blue-500 ">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterSignup;
