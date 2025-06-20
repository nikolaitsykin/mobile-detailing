import React from "react";
import Gallery from "./Gallery";
import GoogleMap from "./Map";
import GoogleReview from "./ReviewsWidget";
import Services from "./Services";
import Testimonials from "./Testimonials";
import BookButtons from "./UI/BookButtons";

const Hero = ({ city }) => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full bg-black">
        <div className="bg-black opacity-40 object-cover h-[calc(60vh-0px)] sm:h-[calc(100vh-0px)] w-full mx-auto absolute"></div>
        <img
          src="https://pub-a032091c79624619ade299caa8a7dbc6.r2.dev/serjan-midili-1O1v7Fe0Lto-unsplash%202.jpg"
          alt="Auto detailing"
          className="object-cover h-[calc(60vh-0px)] sm:h-[calc(100vh-0px)] w-full mx-auto"
        />
        {/* <video
          id="video"
          crossOrigin="anonymous"
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover h-[calc(60vh-0px)] sm:h-[calc(100vh-0px)] w-full mx-auto"
        > */}
        {/* <source
            src="https://video.wixstatic.com/video/e89baa_b07cf38de30c423faf60e10b72bbb1a5/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video> */}
      </div>
      <div className="w-full object-cover h-[calc(75vh-0px)] sm:h-[calc(115vh-0px)] top-0 flex justify-center items-center absolute  ">
        <div className="w-[90%] flex flex-col justify-center items-center text-white">
          {/* <h3 className="text-base sm:text-xl text-center font-light font-poppins p-1 sm:p-4">
            Top-Tier Service in {city ? city : "Raleigh"}, NC
          </h3> */}
          <h1 className=" w-full md:w-1/2 uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Spotless Mobile Auto Detailing {city ? city : "Raleigh"}
          </h1>
          <h3 className="w-full md:w-1/2 my-2 p-0 md:my-4 text-center text-xs sm:text-sm md:text-lg sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Spotless Auto Detailing provides the finest car detailing services
            in Raleigh, Cary, Apex and the surrounding areas.{" "}
          </h3>
          <div
            id="book_buttons"
            className="flex flex-row justify-center items-center w-full min-w-48 gap-1 "
          >
            <BookButtons color={"primary"} border={"border"} />
          </div>
        </div>
      </div>
      <section>
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>
      <section>
        <div className="pb-12 mt-10">
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
