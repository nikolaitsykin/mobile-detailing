import About from "./About";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import GoogleReview from "./GoogleReview";
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
          alt="Spotless Auto Detailing"
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
          <h3 className="w-full md:w-2/3 my-3 p-0 md:my-4 text-center text-sm sm:text-base md:text-xl sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Spotless Auto Detailing & Ceramic Coating
          </h3>
          <h1 className="w-full md:w-2/3 uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {city}’s #1 Mobile Car Detailing Service{" "}
          </h1>
          <h3 className="w-full md:w-2/3 my-3 p-0 md:my-4 text-center text-sm sm:text-base md:text-xl sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Premium Mobile Car Detailing, Ceramic Coating & Paint Correction in{" "}
            {city} and Nearby Areas{" "}
          </h3>
          <div
            id="book_buttons"
            className="flex flex-row justify-center items-center w-full min-w-48 gap-1 mt-3"
          >
            <BookButtons color={"primary"} border={"border"} />
          </div>
        </div>
      </div>
      <section>
        <div className="mt-10">
          <GoogleReview />
        </div>
        <div>
          <Services city={city} />
          <Testimonials />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <About city={city} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
