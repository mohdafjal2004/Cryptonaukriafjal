import React from "react";
import Common from "./Common";
import { Link } from "react-router-dom";
import polygon1 from "../assets/polygon1.png";
import user from "../assets/user.png";
import polygon2 from '../assets/polygon2.png'
import suit from '../assets/suit.png'

const First = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="w-[45vw]">
          <Common />
        </div>
        <div className="w-[55vw]">
          <div>
            <div className="flex absolute w-[282px] h-[28px] left-[1200px] top-[70px]">
              <p className="text-slate-400">Already have an account?</p>
              <Link to="/login" className=" mx-2 text-blue-700 font-semibold">
                Sign In
              </Link>
            </div>
            <div>
              <h1 className="absolute w-[118px] h-[36px] left-[793px] top-[180px] font-bold text-xl">
                Join Us!
              </h1>
              <p className="absolute w-[411px] h-[56px] left-[793px] top-[210px] text-slate-400 text-sm tracking-wide">
                To begin this journey, tell us what type of <br /> account you'd
                be opening.
              </p>
            </div>

            <div className="flex flex-col">
              <Link
                to="/signup2"
                className="absolute  w-[350px] h-[80px] left-[793px] top-[280px] shadow-md shadow-slate-200 rounded-md   
                hover:border-blue-600 hover:border-2 hover:bg-blue-100 "
              >
                <button className="absolute left-1/4 top-2 ">Individual</button>
                <p className="text-xs absolute text-slate-400 left-1/4 top-8 ">
                  Personal account to manage all you <br /> activities.
                </p>
                <img
                  src={polygon1}
                  alt=""
                  className="w-10 h-10 absolute left-6 top-4"
                />
                <img
                  src={user}
                  alt=""
                  className="w-6 h-6 absolute left-8 top-6"
                />
              </Link>
              <Link
                to="/signup2"
                className="absolute  w-[350px] h-[80px] left-[793px] top-[380px] shadow-md shadow-slate-200 rounded-md 
                hover:border-blue-600 hover:border-2 hover:bg-blue-100"
              >
                <button className="absolute left-1/4 top-2 ">Business</button>
                <p className="text-xs absolute text-slate-400 left-1/4 top-8 ">
                  Own or belong to a company, this is <br /> for you.
                </p>
                <img
                  src={polygon2}
                  alt=""
                  className="w-10 h-10 absolute left-6 top-4"
                />
                <img
                  src={suit}
                  alt=""
                  className="w-6 h-6 absolute left-8 top-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
