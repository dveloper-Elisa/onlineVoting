import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import connection from "../api/APIlink.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [candidate, setCandidate] = useState();
  useEffect(() => {
    const candidates = async () => {
      try {
        const allCandidates = await axios.get(`${connection}/candidates`);

        setCandidate(allCandidates.data.candidates);
      } catch (error) {
        alert(error.message);
      }
    };

    candidates();
  }, []);

  return (
    <>
      <Header />
      <div className=" h-screen  bg-teal-800  w-2/6 border-y-2">
        <div className="flex flex-col p-2 text-white ">
          <p className="font-bold underline underline-offset-8 py-5 md:text-[20px] lg:text-[2rem] px-2">
            ELECTION POSTS
          </p>
          {candidate.map((post, index) => {
            return (
              <div className="hover:bg-white hover:text-black cursor-pointer p-5 font-bold tracking-wider">
                {post.post}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
