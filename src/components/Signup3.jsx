import React, { useState } from "react";
import Common from "./Common";
import { Link } from "react-router-dom";
import lock from "../assets/lock.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CountryDropdown from "country-dropdown-with-flags-for-react";  

const Signup3 = () => {
  const [phone, setPhone] = useState();
   const [details, setDetails] = useState({
     address : ""
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
              to="/signup2"
              className="text-base absolute left-[6rem] top-[40px] text-slate-500"
            >
              Back
            </Link>
          </div>
          <div className="flex flex-col absolute w-[282px] h-[28px] left-[620px] top-[39px]">
            <p className="text-slate-400 text-sm">STEP 02/03</p>
            <p className="text-slate-500 text-left">Personal Info.</p>
          </div>
          <div className="absolute top-[-50px]">
            <h1 className="absolute w-[350px] h-[36px] left-[200px] top-[180px] font-bold text-2xl tracking-wide">
              Complete Your Profile!
            </h1>
            <div className="absolute w-[330px] h-[56px] left-[200px] top-[210px] text-slate-400 text-sm tracking-wide mt-3">
              For the purpose of industry regulation, your details are required.
            <hr className="my-4 w-[22rem]" />
            </div>
          </div>

          {/* Form */}
          <div className="absolute left-[200px] top-[15rem] space-y-3">
            <div className="space-y-2 ">
              <h2 className="text-slate-500 text-sm">Phone number</h2>

              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                name="phone"
                onChange={setPhone}
                className="rounded-lg h-10 px-4  py-4 text-lg border-2 border-slate-400 focus:border-sky-500
                 focus:ring-sky-500 block  focus:outline-offset-2 focus:ring-2 "
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-slate-500 text-sm">Your address</h2>
              <input
                type="text"
                value={details.address}
                name='address'
                onChange={handleDetails}
                className="border-2 border-slate-400 w-[350px] rounded-lg h-10 px-8 py-4 font-normal
                  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  text-lg focus:ring-1 "
                placeholder="Enter your full address"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-slate-500 text-sm">Country of residence</h2>
              <CountryDropdown
                id="UNIQUE_ID"
                className="YOUR_CSS_CLASS rounded-lg h-10 px-4 w-[350px] py-4 text-lg border-2 border-slate-400 focus:border-sky-500
                 focus:ring-sky-500 block  focus:outline-offset-2 focus:ring-2 text-slate-400"
                preferredCountries={["in", "usa"]}
                value=""
                handleChange={(e) => console.log(e.target.value)}
              ></CountryDropdown>
            </div>
          </div>
          <div className="absolute left-[200px] w-[250px] top-[500px] space-x-3 my-[-19px]">
            <input type="checkbox" id="accept" value="accept" />
            <label htmlFor="accept" className="text-sm">
              I agree to terms & conditions
            </label>
          </div>
          <Link
            to="/signup4"
            className="w-[350px] absolute left-[200px] top-[550px]  h-10 px-[110px] py-[9px]
             bg-blue-600 rounded-lg text-white text-sm my-[-22px]"
          >
            Register Account
          </Link>
          <div className="absolute left-[200px] top-[600px]  w-[350px] my-[-10px] flex justify-center items-baseline text-xs text-slate-400">
            <img src={lock} alt="" className="w-[14px] h-[14px] mr-3 " />
            Your Info is safely secured
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup3;
