import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className=" h-screen  bg-teal-800  w-2/6 border-y-2">
        <div className="flex flex-col p-2 text-white ">
          <p className="font-bold underline underline-offset-8 py-5 md:text-[20px] lg:text-[2rem] px-2">
            ELECTION STATISTICS
          </p>
          <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
            Guild
          </div>
          <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
            VS.guild
          </div>
          <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
            MS of Education
          </div>
          <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
            GEN. Leader
          </div>
          <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
            Election report
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
