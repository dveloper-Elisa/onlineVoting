import React from "react";

import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Candidate from "../componet/candidates.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import connetion from "../api/APIlink.js";
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
        const data = await axios.get(`${connetion}/candidates`);

        if (data.status === 200) {
          setData(data.data.candidates);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getCandidate();
  }, []);

  const arra = [
    {
      name: "kwizera Elisa",
      regNo: "21RP00159",
      post: "Guild",
      src: "/RP_LOGO.jpeg",
    },
    {
      name: "Niyikiza Liliane",
      regNo: "21RP04636",
      post: "Securitary",
      src: "/RP_LOGO.jpeg",
    },
    {
      name: "Uwitondanishema muslim",
      regNo: "21RP20309",
      post: "Os murale",
      src: "/RP_LOGO.jpeg",
    },
    {
      name: "Elisabeth XXXXXX",
      regNo: "21RP005723",
      post: "protocal",
      src: "/RP_LOGO.jpeg",
    },
    {
      name: "Shikamusenge Philemon",
      regNo: "21RP00029",
      post: "Communication",
      src: "/RP_LOGO.jpeg",
    },
  ];

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-2">
        {data.map((candidate, index) => {
          return (
            <Candidate
              src={candidate.src}
              name={candidate.name}
              post={candidate.post}
              regNo={candidate.regNo}
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
