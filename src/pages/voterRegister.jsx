import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connection from "../api/APIlink.js";
import axios from "axios";

const VoterSignup = () => {
  const navigation = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [regNo, setRegNo] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      if (name === "" || email === "" || regNo === "" || password === "") {
        alert("fill all the fileds");
        return;
      }

      if (password != confirm) {
        alert("password should match");
        return;
      }

      const signup = await axios.post(`${connection}/voter/register`, {
        name,
        email,
        regNo,
        password,
      });
      if (signup.status === 201) {
        alert(signup.data.message);
        navigation("/");
      }
      if (signup.status === 200) {
        alert(signup.data.message);
      }
      if (signup.status === 400) {
        alert("Not registered");
        return;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center border border-green-800 rounded-md p-2 w-80">
        <div>
          <img
            src="/RP_Log.png"
            alt="RP LOGO"
            className="w-48 h-40 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-bold tracking-wider text-[1.5rem]">Voter Signup</p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full names"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="text"
              value={regNo}
              onChange={(e) => {
                setRegNo(e.target.value);
              }}
              placeholder="Your regNumber"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Your password"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="password"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              placeholder="Confirm password"
              className="p-2 border-green-800 border rounded-md"
            />
            <button
              disabled={loading}
              onClick={handleSignup}
              className="bg-green-500 hover:bg-teal-800 text-white font-bold p-2 rounded-md tracking-wide"
            >
              {loading ? "loading..." : "Signup"}
            </button>
            <p>
              Already have accound please Login{" "}
              <a href="/" className="text-blue-800 hover:text-blue-500 ">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterSignup;
