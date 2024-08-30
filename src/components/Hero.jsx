import React from "react";
import Button from "./UI/Button";
import detailingVideo from "../assets/videos/6158070-hd_1920_1080_30fps.mp4";

const Hero = () => {
  return (
    <main className="w-full z-10">
      <div className="relative">
        <div className="bg-black">
          <video
            className="opacity-40 object-cover min-h-[450px] w-full mx-auto"
            autoPlay
            loop
            muted
            type="video/mp4"
            playsInline
          >
            <sourse src={detailingVideo} />
          </video>
        </div>
        <div className="absolute top-1 sm:inset-y-8 px-10 py-32 sm:px-32">
          <p className="text-white text-xl md:text-4xl w-full flex justify-center">
            Mobile detailing service in Triagle area
          </p>
          <p className="text-xs  md:text-sm text-white pt-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service at the best prices. Trust us to enhance
            and safeguard your vehicle with the care it deserves.
          </p>
          <div className="pt-2 md:pt-5 flex flex-col xs:flex-row justify-center items-center">
            <div className="p-2 md:p-5">
              <Button children={"BOOK NOW"} color={"primary"} />
            </div>
            <div className="md:p-2">
              <Button children={"CALL NOW"} color={"primary"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
