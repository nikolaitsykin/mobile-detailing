import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import Hero from "../Hero";
import BookButtons from "../UI/BookButtons";
import Button from "../UI/Button";

const Root = () => {
  return (
    <main className="w-full z-10 bg-white font-poppins">
      <div className="relative text-sm md:text-base">
        <div className="w-[90%] mx-auto z-10 absolute top-36 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="animate-slidein500 opacity-0 text-white text-3xl sm:text-4xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
            PRIME AUTO DETAILING
          </h1>
          <p className="animate-slidein700 opacity-0 text-xs md:text-base text-white py-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service. Trust us to enhance and safeguard your
            vehicle with the care it deserves.
          </p>
          <BookButtons color="primary" />
        </div>
        <div className="bg-black">
          <video
            className="opacity-50 object-cover min-h-[450px] md:h-[550px] w-full mx-auto"
            autoPlay
            loop
            playsInline
            muted
            type="video/mp4"
            src={detailingVideo}
          />
        </div>
        <Hero />
        <section className="w-[90%] md:w-[80%] mx-auto">
          <article className="text-black text-sm md:text-base w-full flex flex-col justify-center">
            <h2
              id="about-us"
              className="text-black text-xl md:text-2xl text-center font-syne font-bold"
            >
              About Us
            </h2>
            <h3 className="text-black text-base md:text-lg font-syne font-semibold">
              Who we are?
            </h3>
            <p>
              Detailing Guys is a highly-rated detailing company based in Apex,
              serving the Triangle area. We specialize in providing eco-friendly
              detailing solutions that keep your vehicle looking its best while
              caring for the environment.
            </p>
            <h3 className="text-black text-base md:text-lg font-syne font-semibold">
              Our mission
            </h3>
            <p>
              Our mission is to deliver premium detailing results while using
              safe, environmentally-conscious products.
            </p>
            <h3 className="text-black text-base md:text-lg font-syne font-semibold">
              Our values
            </h3>
            <p>
              With experience detailing everything from family cars to
              high-performance vehicles, we aim to maintain your car's value and
              enhance your driving experience—all while keeping sustainability
              front and center.
            </p>
            <div className="my-5 pt-5">
              <Link to="/about">
                <Button color="secondary" children="Learn More" />
              </Link>
            </div>
            <h2
              id="what-is-detailing"
              className="text-black text-xl md:text-2xl text-center font-syne font-bold"
            >
              What is Detailing?
            </h2>
            <h3 className="text-black text-base md:text-lg font-syne font-semibold">
              Detailing is more than a ‘wash and polish’.
            </h3>
            <p>
              Detailing goes beyond the usual wash. It's about using advanced
              techniques and safe, eco-friendly products to clean, restore, and
              protect your vehicle inside and out.
            </p>

            <h3 className="text-black text-lg font-syne font-semibold">
              Our approach
            </h3>
            <p>
              At Detailing Guys, we're committed to partner with brands which
              innovative products ensure high performance while protecting the
              environment. Their line of eco-friendly, pH-balanced chemicals
              guarantees that your vehicle receives the care it deserves without
              harmful effects on our planet.
            </p>
            <p className="text-black text-lg md:text-xl text-center my-10 font-medium">
              Choose Detailing Guys for results that protect both your car and
              the environment, powered by premium, eco-friendly products.
            </p>
            <div className="pb-10">
              <BookButtons color="secondary" />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Root;
