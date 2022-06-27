import React, { useState } from "react";
import Common from "./Common";
import { Link } from "react-router-dom";
import google from "../assets/google.png";

const Signup2 = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex flex-row ">
        <div className="w-[45vw]">
          <Common />
        </div>
        <div className="relative">
          <div>
            <span className="text-3xl absolute left-[5rem] top-[30px]">
              &#8249;
            </span>
            <Link
              to="/"
              className="text-base absolute left-[6rem] top-[40px] text-slate-500"
            >
              Back
            </Link>
          </div>
          <div className="flex absolute w-[282px] h-[28px] left-[550px] top-[70px]">
            <p className="text-slate-400">Don't have an account?</p>
            <Link to="/" className=" mx-2 text-blue-700 font-semibold">
              Sign Up
            </Link>
          </div>
          <div className="absolute top-[-50px]">
            <h1 className="absolute w-[350px] h-[36px] left-[200px] top-[180px] font-bold text-2xl tracking-wide">
              Login Individual Account!
            </h1>
            <div className="absolute w-[330px] h-[56px] left-[200px] top-[210px] text-slate-400 text-sm tracking-wide mt-3">
              For the purpose of industry regulation, your details are required.
              <hr className="my-4 w-[22rem]" />
            </div>
          </div>

          {/* Form */}
          <div className="absolute left-[200px] top-[15rem] space-y-3">
            <div className="space-y-2">
              <h2 className="text-slate-500 text-sm">Email address*</h2>
              <input
                type="email"
                value={details.email}
                name="email"
                onChange={handleDetails}
                className="border-2 border-slate-400 w-[350px] rounded-lg h-10 px-3 py-4 text-xs
                 font-semibold focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm focus:ring-1 "
                placeholder="Please enter address"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-slate-500 text-sm">Create password*</h2>
              <input
                type="password"
                value={details.password}
                name="password"
                maxlength="20"
                onChange={handleDetails}
                className="border-2 border-slate-400 w-[350px] rounded-lg h-10 px-3 py-4 text-xs font-semibold focus:outline-none 
                focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm focus:ring-1"
                placeholder="Enter Password"
              />
            </div>
          </div>

          <Link
            to="/signup3"
            className="w-[350px] absolute left-[200px] top-[450px]  h-10 px-[110px] py-[9px]
             bg-blue-600 rounded-lg text-white text-sm my-[-22px]"
          >
            Login Account
          </Link>
          <div className="absolute left-[200px] top-[500px] flex items-center w-[350px] my-[-10px]">
            <hr className="w-[320px] mx-4" />
            or <hr className="w-[320px] mx-4" />
          </div>
          <button
            className="absolute left-[200px] top-[505px] w-[350px] h-10 mt-10 flex shadow-lg items-center 
          justify-center space-x-8 py-4 hover:border-blue-600 hover:border-2 rounded-lg hover:bg-blue-100 "
          >
            <img src={google} alt="" className="w-4 ml-[-8px]" />
            <span className="text-sm  py-6">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
