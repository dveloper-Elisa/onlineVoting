import React from "react";

const Candidate = ({ src, post, name, regNo }) => {
  return (
    <div className="flex flex-col border border-white w-fit p-2 rounded-lg bg-green-800">
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
          <div className="flex flex-row gap-5">
            <p>
              name: <span className="font-bold">{name}</span>
            </p>
            <p>
              regNumber:<span className="font-bold"> {regNo}</span>
            </p>
            <p>
              post: <span className="font-bold">{post}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
