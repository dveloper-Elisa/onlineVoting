import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Candidate from "../componet/candidates.jsx";
import connection from "../api/APIlink.js";
import posts from "./post.js";

const CompetitionCandidate = () => {
  const [data, setData] = useState([]);
  const [editCandidate, setEditCandidate] = useState(null); // For editing a candidate
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [post, setPost] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("AKey");
    if (token != null || !token === "undefined") {
      setAdmin(true);
    }

    const getCandidate = async () => {
      try {
        const response = await axios.get(`${connection}/candidates`);
        setData(response.data.candidates);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCandidate();
  }, []);

  // Handle delete candidate
  const deleteCandidate = async (id) => {
    try {
      await axios.delete(`${connection}/candidates/${id}`);
      setData(data.filter((candidate) => candidate._id !== id)); // Update the state
    } catch (error) {
      console.log("Error deleting candidate:", error.message);
    }
  };

  // Handle update candidate (when "Update" button is clicked)
  const handleUpdateClick = (candidate) => {
    setEditCandidate(candidate); // Set the candidate to be edited
    setName(candidate.name);
    setRegNo(candidate.regNo);
    setPost(candidate.post);
  };

  // Submit the updated candidate data
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCandidate = {
        name,
        regNo,
        post,
      };
      await axios.put(`${connection}/candidates/${editCandidate._id}`, updatedCandidate);
      const updatedData = data.map((candidate) =>
        candidate._id === editCandidate._id ? { ...candidate, ...updatedCandidate } : candidate
      );
      setData(updatedData);
      setEditCandidate(null); // Close the form
    } catch (error) {
      console.log("Error updating candidate:", error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-5 pb-[7rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-2">
        {data.map((candidate, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          >
            <Candidate
              src={`${connection}/${candidate.filePath}`}
              name={candidate.name}
              post={candidate.post}
              regNo={candidate.regNo}
              candidateId={candidate._id}
            />

            {admin && (
              <div className="flex justify-between mt-4 space-x-2">
                <button
                  className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                  onClick={() => handleUpdateClick(candidate)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-600"
                  onClick={() => deleteCandidate(candidate._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Update Form Modal (popup) */}
      {editCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-full max-w-md mx-auto">
            <h2 className="text-2xl mb-4">Update Candidate</h2>
            <form onSubmit={handleUpdateSubmit}>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                RegNo:
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </label>
              <label className="block mb-4">
                Post:
                <select
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="border p-2 rounded w-full"
                >
                  <option value={"Select"}>Select...</option>
                  {posts.map((post, index) => (
                    <option key={index}>{post}</option>
                  ))}
                </select>
              </label>
              <div className="flex justify-between space-x-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full"
                >
                  Submit
                </button>
                <button
                  onClick={() => setEditCandidate(null)}
                  className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 w-full"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CompetitionCandidate;
