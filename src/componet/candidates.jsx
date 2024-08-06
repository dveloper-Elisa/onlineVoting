import React from "react";
import { useState } from "react";
import axios from "axios";
import connection from "../api/APIlink.js";
const Candidate = ({ src, post, name, regNo, candidateId }) => {
  const [loading, setLoading] = useState(false);

  const voteCandidate = async () => {
    setLoading(true);
    try {
      const vote = await axios.post(`${connection}/voter/vote`, {
        voterId: localStorage.getItem("voterId"),
        candidateId: candidateId,
      });

      if (vote.status === 200) {
        alert(vote.data.message);
        return;
      }
      if (vote.status === 201) {
        alert(vote.data.message);
        return;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col border border-white w-fit p-2 rounded-lg bg-teal-800">
      <div className="flex flex-col justify-center items-center p-2 bg-green-200 rounded-md">
        <div>
          <img
            src={src}
            alt="candidate"
            className="w-32 h-32 rounded-full border-2 border-green-800"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Candidate details</p>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">name:</span> {name}
            </p>
            <p>
              <span className="font-bold"> regNumber:</span> {regNo}
            </p>
            <p>
              <span className="font-bold"> post:</span> {post}
            </p>
            <button
              onClick={voteCandidate}
              className="bg-teal-800 hover:bg-teal-500 font-bold text-white tracking-wider py-1 rounded-md"
            >
              {loading ? "voting..." : "Vote"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
