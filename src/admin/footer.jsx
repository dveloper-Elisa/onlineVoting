import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-teal-800 text-white p-2 justify-evenly">
      <div className="font-bold uppercase">
        <p>
          {" "}
          <i className="far fa-copyright"></i> reserved for IPRC Ngoma Student
          union{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
