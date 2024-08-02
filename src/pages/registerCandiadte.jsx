import React from "react";
import Header from "../admin/header.jsx";
import Footer from "../admin/footer.jsx";

const registerCandidate = () => {
  const posts = [
    "Guild prezident",
    "Vs.Guild President",
    "Protocal",
    "Albitration",
    "Disability",
    "OSImurali",
    "Sport",
  ];

  return (
    <>
      <Header />

      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col items-center border border-green-800 rounded-md p-2">
          <div>
            <img
              src="/RP_Log.png"
              alt="RP LOGO"
              className="w-20 h-20 rounded-full"
            />
          </div>

          <div className="flex flex-col gap-5 w-96">
            <p className="font-bold tracking-wider text-[1.5rem]">
              Register Candidate
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Full names"
                className="p-2 border-green-800 border rounded-md"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="RegNumber"
                className="p-2 border-green-800 border rounded-md"
              />
              <select
                name=""
                id=""
                className="p-2 border-green-800 border rounded-md"
              >
                <option disabled>Select Post</option>
                {posts.map((post, index) => {
                  return <option key={index}>{post}</option>;
                })}
              </select>
              <button className="bg-green-500 hover:bg-green-800 text-white font-bold p-2 rounded-md tracking-wide">
                Register Candidate
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default registerCandidate;
