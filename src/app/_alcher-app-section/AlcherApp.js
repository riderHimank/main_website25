"use client";

import "./alcherapp.css";
import Image from "next/image";
// import pic from './_components/image.png';

// import GetAppBtn from './_components/getAppBtn';
import Text from "./_components/Text";
import VanillaTilt from "./vanila-tilt";
import { useEffect } from "react";

// For mobile rendering
// import Line from './_components/Line';
// import Feeling_Lost from './_components/Feeling_Lost';
// import Noneedworry from './_components/Noneedworry';
// import Wegotyou from './_components/wegotyou';
// import Covered from './_components/Covered';
// import Atext from './_components/Atext';
// import Btext from './_components/Btext';
// import B1text from './/_components/B1text';

const AlcherApp = () => {
  // Initialize VanillaTilt
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      VanillaTilt.init(tiltElements);
    }
  }, []);

  return (
    <div className="alcher-app">
      <div className="mobile">
        <div className="flex">
          <div className="phone tiltcard" data-tilt>
            <Image
              src="./device.svg"
              alt="Alcher App"
              width={300}
              height={600}
              className="device"
            />
          </div>
        </div>

        {/* These components for mobile screens  */}

        {/* <Feeling_Lost className="feelinglost" />
        <Noneedworry className = "noneed"/>
        <Wegotyou className="wegotyou" />
        <Covered className="covered" />
        <Atext className="atext" />
        <B1text className="b1text" />  */}
        {/* /* <Btext className="btext" /> */}

        <Image
          src="./mobile-text.svg"
          width={500}
          height={500}
          className="mobile-text"
        />

        <Image
          src="./app_text.svg"
          alt="Alcher App"
          width={300}
          height={600}
          className="text"
        />
        {/* <Text className="text" /> */}

        <a href="">
          <Image
            src="./app_btn.svg"
            alt="Alcher App"
            width={300}
            height={600}
            className="get-app-btn"
          />
        </a>
        {/* <GetAppBtn className="get-app-btn" />  */}
      </div>
    </div>
  );
};

export default AlcherApp;
