import React from "react";
import Header from "../admin/header.jsx";
import Footer from "../admin/footer.jsx";
import connection from "../api/APIlink.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import posts from "./post.js";

const RegisterCandidate = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [post, setPost] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("AKey");
    if (!token || token === "undefined") {
      navigation("/");
    }
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    if (post === "Select") {
      setLoading(false);
      return alert("Please Select post");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("regNo", regNo);
    formData.append("post", post);
    formData.append("file", file);

    try {
      const register = await axios.post(
        `${connection}/admin/candidate`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (register.status === 200 || register.status === 201) {
        alert(register.data.message);
        navigation("/admin-dashboard");
        return;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col items-center border border-green-800 rounded-md p-2">
          <div>
            <img
              src="/RP_Log.png"
              alt="RP LOGO"
              className="w-20 h-20 rounded-full"
            />
          </div>

          <div className="flex flex-col gap-5 w-96">
            <p className="font-bold tracking-wider text-[1.5rem]">
              Register Candidate
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="p-2 border-green-800 border rounded-md"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full names"
                className="p-2 border-green-800 border rounded-md"
              />
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="RegNumber"
                className="p-2 border-green-800 border rounded-md"
              />
              <select
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="p-2 border-green-800 border rounded-md"
              >
                <option value={"Select"}>Select...</option>
                {posts.map((post, index) => (
                  <option key={index}>{post}</option>
                ))}
              </select>
              <button
                disabled={loading}
                onClick={handleRegister}
                className="bg-green-500 hover:bg-teal-800 text-white font-bold p-2 rounded-md tracking-wide"
              >
                {loading ? "Registering..." : "Register Candidate"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterCandidate;
