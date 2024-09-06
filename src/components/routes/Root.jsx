import React from "react";
import Hero from "../Hero";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import detailingVideo from "../../assets/videos/6158070-hd_1920_1080_30fps.mp4";

const Root = () => {
  return (
    <main className="w-full z-20 bg-white pb-8 font-poppins">
      <div className="relative">
        <div className="w-[80%] z-10 absolute top-32 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-2xl sm:text-3xl md:text-5xl w-full flex justify-center tracking-widest font-syne font-bold">
            PRIME AUTOMOTIVE DETAILING
          </h1>
          <p className="text-xs animate-slidein500 opacity-0 md:text-base text-white pt-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service at the best prices. Trust us to enhance
            and safeguard your vehicle with the care it deserves.
          </p>
          <div className="pt-2 animate-slidein700 opacity-0  md:pt-5 flex flex-col xs:flex-row justify-center items-center">
            <span className="p-2 md:p-5">
              <Link to="/booking">
                <Button children={"BOOK NOW"} color={"primary"} />
              </Link>
            </span>
            <span className="md:p-2">
              <a href="tel:2673106864" className="flex">
                <Button children={"CALL NOW"} color={"primary"} />
              </a>
            </span>
          </div>
        </div>
        <div className="bg-black">
          <video
            className="opacity-60 object-cover min-h-[450px] h-[550px] w-full mx-auto"
            autoPlay
            loop
            playsInline
            muted
            type="video/mp4"
            src={detailingVideo}
          />
        </div>
        <Hero />
      </div>
    </main>
  );
};

export default Root;
