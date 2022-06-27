import React from "react";
import bg from "../assets/buildings.jpg";
import vector1 from "../assets/vector 1.png";
import image from "../assets/image.png";
import logo from "../assets/logo.png";
import image2 from "../assets/image2.png";

const Common = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        background: `linear-gradient( rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.8)), url(${bg})`,
        backgroundSize: "cover",
      }}
      className="h-[100vh]"
    >
      {/* position: absolute; width: 46px; height: 19px; left: 136px; top: 75px; */}
      <div>
        <img
          src={logo}
          alt=""
          className="absolute w-[140px] h-[50px] left-[90px] top-[60px] "
        />
      </div>
      <div className="bg-[linear-gradient( rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.8))]  absolute w-[28px] h-[117px] left-[82px] top-[250px]">
        <img src={vector1} alt="" />
      </div>
      <div className="w-[473px] h-[190px] text-white mx-auto absolute top-[300px] left-[82px] text-left text-base font-light leading-loose tracking-wide">
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. <br />
        <div className="flex">
          <div>Vincent Obi</div>
          <div className="absolute top-[136px] left-[100px] bg-green-500 w-4 h-4 rounded-full">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt=""
          className="absolute w-[33.5px] h-[33px] left-[517px] top-[480px]"
        />
      </div>
      <div>
        <div className="h-[110px] w-[110px] rounded-full border-2 border-red-700 absolute top-[600px]"></div>
        <div className="h-[60px] w-[60px] rounded-full border-2 border-red-700 absolute top-[627px] left-6"></div>
      </div>
    </div>
  );
};

export default Common;
