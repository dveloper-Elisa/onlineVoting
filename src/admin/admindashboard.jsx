import React, { useEffect, useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import connection from "../api/APIlink.js";
import posts from "../pages/post.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigation = useNavigate();
  const [candidate, setCandidate] = useState();
  const [votes, setVotes] = useState();
  const [position, setPosition] = useState();
  const [isResponsiveVisible, setIsResponsiveVisible] = useState(false); // State to manage the visibility of the responsive div

  useEffect(() => {
    const token = localStorage.getItem("AKey");
    if (!token || token === "undefined") {
      navigation("/");
    }

    const candidates = async () => {
      try {
        const allCandidates = await axios.post(`${connection}/candidates`);
        setCandidate(allCandidates.data.candidates);
      } catch (error) {
        console.log(error.message);
      }
    };

    candidates();
  }, []);

  const votePost = async (posts) => {
    try {
      const voted = await axios.post(`${connection}/candidates`, {
        post: posts,
      });
      setVotes(voted.data.candidates);
      console.log(voted.data.candidates);
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleResponsiveDiv = () => {
    setIsResponsiveVisible(!isResponsiveVisible); // Toggle the visibility of the responsive div
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row gap-2 ">
        {/* Toggle button for small screens */}
        <button
          onClick={toggleResponsiveDiv}
          className="md:hidden lg:hidden bg-teal-800 text-white p-2 rounded-md w-fit text-[20px] mt-1"
        >
          {isResponsiveVisible ? "X" : "☰"}{" "}
        </button>

        <div
          id="responsive"
          className={`${
            isResponsiveVisible ? "block w-full" : "hidden "
          } md:flex lg:flex flex-col p-2 text-white bg-teal-800 h-screen overflow-y-scroll w-2/6 border-y-2`}
        >
          <a href="/addcandidate" className="">
            <li className="list-none hover:bg-green-500 bg-green-700 p-2 rounded-md w-fit">
              Add candidate
            </li>
          </a>
          <p className="font-bold text-green-200 py-5 md:text-[20px] lg:text-[2rem] px-2">
            ELECTION POSTS
          </p>

          {posts.map((post, index) => (
            <div
              onClick={() => {
                votePost(post);
                setPosition(post);
                {
                  isResponsiveVisible
                    ? setIsResponsiveVisible(!isResponsiveVisible)
                    : setIsResponsiveVisible(null);
                }
              }}
              key={index}
              className="hover:bg-white hover:text-black cursor-pointer p-2 font-bold tracking-wider border-b"
            >
              {post}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-3 ">
            <p className="font-bold">
              Position: {position ? position : "positions of the candidate"}
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols4">
              {votes?.map((cdnt, index) => (
                <div
                  className="flex gap-3 items-center bg-teal-500 rounded-md p-2 w-full"
                  key={index}
                >
                  <div className="flex flex-wrap">
                    <img
                      src={`${connection}/${cdnt.filePath}`}
                      alt={cdnt.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="flex">
                      <span className="font-bold">Candidate Name: </span>
                      {cdnt.name}
                    </p>
                    <p className="flex">
                      <span className="font-bold">Candidate RegNumber: </span>
                      {cdnt.regNo}
                    </p>
                    <p className="flex">
                      <span className="font-bold">Total Votes: </span>
                      {cdnt.votes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-blue-600 font-bold">Elected Candidate</p>
              {votes?.reduce(
                (max, vote) => (vote.votes > max.votes ? vote : max),
                votes[0]
              ) && (
                <div className="flex gap-3 items-center bg-green-500 rounded-md p-2">
                  <div className="flex flex-wrap">
                    <img
                      src={`${connection}/${
                        votes.reduce(
                          (max, vote) => (vote.votes > max.votes ? vote : max),
                          votes[0]
                        ).filePath
                      }`}
                      alt={
                        votes.reduce(
                          (max, vote) => (vote.votes > max.votes ? vote : max),
                          votes[0]
                        ).name
                      }
                      className="w-24 h-24 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="flex">
                      <span className="font-bold">Candidate Name: </span>
                      {
                        votes.reduce(
                          (max, vote) => (vote.votes > max.votes ? vote : max),
                          votes[0]
                        ).name
                      }
                    </p>
                    <p className="flex">
                      <span className="font-bold">Candidate RegNumber: </span>
                      {
                        votes.reduce(
                          (max, vote) => (vote.votes > max.votes ? vote : max),
                          votes[0]
                        ).regNo
                      }
                    </p>
                    <p className="flex">
                      <span className="font-bold">Total Votes: </span>
                      {
                        votes.reduce(
                          (max, vote) => (vote.votes > max.votes ? vote : max),
                          votes[0]
                        ).votes
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
