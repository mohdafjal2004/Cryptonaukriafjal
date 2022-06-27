import React, { useState } from "react";
import Common from "./Common";
import { Link } from "react-router-dom";
import lock from "../assets/lock.png";
import "react-phone-number-input/style.css";

const Signup4 = () => {
  const [details, setDetails] = useState({
    bank: "",
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
              to="/signup3"
              className="text-base absolute left-[6rem] top-[40px] text-slate-500"
            >
              Back
            </Link>
          </div>
          <div className="flex flex-col absolute w-[282px] h-[28px] left-[620px] top-[39px]">
            <p className="text-slate-400 text-sm">STEP 03/03</p>
            <p className="text-slate-500 text-left">Bank Verification</p>
          </div>
          <div className="absolute top-[-50px]">
            <h1 className="absolute w-[350px] h-[36px] left-[200px] top-[180px] font-bold text-2xl tracking-wide">
              Complete Your Profile!
            </h1>
            <p className="absolute w-[330px] h-[56px] left-[200px] top-[210px] text-slate-400 text-sm tracking-wide mt-3">
              For the purpose of industry regulation, your details are required.
            </p>
            <hr className="my-4 w-[22rem]" />
          </div>

          {/* Form */}
          <div className="absolute left-[200px] top-[15rem] space-y-3">
            <div className="space-y-2">
              <h2 className="text-slate-500 text-sm">
                Bank verification number (BVN)
              </h2>
              <input
                type="number"
                value={details.bank}
                name="bank"
                onChange={handleDetails}
                className="border-2 border-slate-400 w-[350px] rounded-lg h-10 px-8 py-4 font-normal
                  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  text-lg focus:ring-1 "
                placeholder="000000000000"
                maxLength="12"
              />
            </div>
          </div>

          <Link
            to="/"
            className="w-[350px] absolute left-[200px] top-[400px]  h-10 px-[110px] py-[9px]
             bg-blue-600 rounded-lg text-white text-sm my-[-22px] tracking-wide"
          >
            Save & Continue
          </Link>
          <div className="absolute left-[200px] top-[460px]  w-[350px] my-[-10px] flex justify-center items-baseline text-xs text-slate-400">
            <img src={lock} alt="" className="w-[14px] h-[14px] mr-3  " />
            Your Info is safely secured
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;
