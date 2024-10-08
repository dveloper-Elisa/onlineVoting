import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connectionLink from "../api/APIlink.js";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const handleLogin = async () => {
    setLoading(true);

    try {
      const login = await axios.post(`${connectionLink}/voter/login`, {
        email: userName,
        password: password,
      });

      if (login.status === 200) {
        alert(login.data.message);
        localStorage.setItem("yourKey", login.data.token);
        localStorage.setItem("voterId", login.data.voter._id);
        navigation("/candidates");
      } else {
        alert(login.data.message);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center border border-green-800 rounded-md p-2">
        <div>
          <img
            src="/RP_Log.png"
            alt="RP LOGO"
            className="w-20 h-20 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5 ">
          <p className="font-bold tracking-wider text-[1.5rem]">
            Voting Login System
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email"
              className="p-2 border-green-800 border rounded-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
              className="p-2 border-green-800 border rounded-md"
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-green-500 hover:bg-teal-600 text-white font-bold p-2 rounded-md tracking-wide"
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <button
              onClick={() => {
                navigation("/adminLogin");
              }}
              disabled={loading}
              className="bg-teal-800 hover:bg-teal-600 text-white font-bold p-2 rounded-md tracking-wide"
            >
              Admin
            </button>
            <p>
              If have no account please register{" "}
              <a
                href="/voter-signup"
                className="text-blue-800 hover:text-blue-500 "
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
