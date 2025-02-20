import React from "react";
import Gallery from "./Gallery";
import GoogleMap from "./Map";
import GoogleReview from "./ReviewsWidget";
import Services from "./Services";
import BookButtons from "./UI/BookButtons";

const Hero = ({ city }) => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full bg-black ">
        {/* <img
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_198465715.avif"
          alt="Auto detailing"
          className="opacity-40 object-cover h-[calc(60vh-80px)] sm:h-[calc(100vh-112px)] w-full mx-auto"
        /> */}
        <video
          id="video"
          crossOrigin="anonymous"
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover h-[calc(60vh-80px)] sm:h-[calc(100vh-112px)] w-full mx-auto"
        >
          <source
            src="https://video.wixstatic.com/video/e89baa_b07cf38de30c423faf60e10b72bbb1a5/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="w-full object-cover h-[calc(60vh-80px)] sm:h-[calc(100vh-112px)] top-16 sm:top-20 flex justify-center items-center absolute  ">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h2 className="text-sm sm:text-base text-center font-light font-poppins p-1 sm:p-4">
            Top-Tier Service in {city ? city : "Raleigh"}, NC
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Spotless Auto Detailing
          </h1>
          <p className="text-center mb-2 sm:mb-5 text-xs sm:text-sm md:text-lg mt-2 sm:mt-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Premier Mobile Car Detailing & Ceramic Coating serving Triangle &
            Surrounding Areas.
          </p>
          <div
            id="book_buttons"
            className="flex flex-row justify-center items-center w-full min-w-48 gap-1"
          >
            <BookButtons color={"primary"} border={"border"} />
          </div>
        </div>
      </div>
      <section>
        <div className="pb-12">
          <Services />
        </div>
        <div className="pb-12">
          <GoogleReview />
          <GoogleMap />
        </div>
        <div>
          <Gallery />
        </div>
      </section>
    </div>
  );
};

export default Hero;
