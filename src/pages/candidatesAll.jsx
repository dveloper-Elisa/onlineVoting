import React from "react";

import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Candidate from "../componet/candidates.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompetitionCandidate = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("yourKey");
    if (token === null || token === "undefined") {
      localStorage.clear("yourKey");
      navigation("/login");
    }
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
        {arra.map((data, index) => {
          return (
            <Candidate
              src={data.src}
              name={data.name}
              post={data.post}
              regNo={data.regNo}
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
