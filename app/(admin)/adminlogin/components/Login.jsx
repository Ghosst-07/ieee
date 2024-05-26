import React from "react";
import { Lock } from "react-feather";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="p-5 bg-[#111111] rounded-xl ">
        <h2 className="text-3xl  text-white font-bold">Admin Login</h2>
        <div className="w-full relative group">
          <Lock className="absolute mt-3 ml-2 text-white" />
          <input
            placeholder="Enter Admin Password"
            type="text"
            id="username"
            required
            className="w-full px-10 py-2 mt-2 peer bg-[#28292c] border-gray-300 rounded-md focus:outline-none"
          />
          <div>
            <button className="mt-3 w-full bg-white text-black p-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
