import React from "react";

import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Candidate from "../componet/candidates.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import connection from "../api/APIlink.js";
import axios from "axios";

const CompetitionCandidate = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("yourKey");
    if (token === null || token === "undefined") {
      localStorage.clear("yourKey");
      navigation("/login");
    }

    const getCandidate = async () => {
      try {
        const data = await axios.get(`${connection}/candidates`);

        if (data.status === 200) {
          setData(data.data.candidates);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getCandidate();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 m-2">
        {data.map((candidate, index) => {
          return (
            <Candidate
              src={`${connection}/${candidate.filePath}`}
              name={candidate.name}
              post={candidate.post}
              regNo={candidate.regNo}
              candidateId={candidate._id}
              key={index}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default CompetitionCandidate;
