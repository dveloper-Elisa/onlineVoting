import React from "react";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    const token = localStorage.getItem("AKey");
    if (!token || token == "undefined") {
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

  return (
    <>
      <Header />
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-col p-2 text-white bg-teal-800 h-screen overflow-y-scroll w-2/6 border-y-2">
          <p className="font-bold text-green-200 py-5 md:text-[20px] lg:text-[2rem] px-2">
            ELECTION POSTS
          </p>

          {posts.map((post, index) => {
            return (
              <div
                onClick={() => {
                  votePost(post);
                  setPosition(post);
                }}
                key={index}
                className="hover:bg-white hover:text-black cursor-pointer p-2 font-bold tracking-wider border-b"
              >
                {post}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <p className="font-bold">
              Position: {position ? position : "positions of the candidate"}
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols4">
              {votes?.map((cdnt, index) => {
                return (
                  <div
                    className="flex gap-3 items-center bg-teal-500 rounded-md p-2"
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
                      <p className="flex ">
                        <span className="font-bold">Candidate Name: </span>
                        {cdnt.name}
                      </p>
                      <p className="flex ">
                        <span className="font-bold">Candidate RegNumber: </span>
                        {cdnt.regNo}
                      </p>
                      <p className="flex ">
                        <span className="font-bold">Total Votes: </span>
                        {cdnt.votes}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div>
                {votes?.reduce(
                  (max, vote) => (vote.votes > max.votes ? vote : max),
                  votes[0]
                ) && (
                  <div className="flex gap-3 items-center bg-green-500 rounded-md p-2">
                    <div className="flex flex-wrap">
                      <img
                        src={`${connection}/${
                          votes.reduce(
                            (max, vote) =>
                              vote.votes > max.votes ? vote : max,
                            votes[0]
                          ).filePath
                        }`}
                        alt={
                          votes.reduce(
                            (max, vote) =>
                              vote.votes > max.votes ? vote : max,
                            votes[0]
                          ).name
                        }
                        className="w-24 h-24 rounded-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="flex ">
                        <span className="font-bold">Candidate Name: </span>
                        {
                          votes.reduce(
                            (max, vote) =>
                              vote.votes > max.votes ? vote : max,
                            votes[0]
                          ).name
                        }
                      </p>
                      <p className="flex ">
                        <span className="font-bold">Candidate RegNumber: </span>
                        {
                          votes.reduce(
                            (max, vote) =>
                              vote.votes > max.votes ? vote : max,
                            votes[0]
                          ).regNo
                        }
                      </p>
                      <p className="flex ">
                        <span className="font-bold">Total Votes: </span>
                        {
                          votes.reduce(
                            (max, vote) =>
                              vote.votes > max.votes ? vote : max,
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
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
