import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import Hero from "../Hero";
import Promos from "../Promos";
import BookButtons from "../UI/BookButtons";
import Button from "../UI/Button";

const Root = () => {
  return (
    <main className="w-full z-10 bg-white ">
      <div className="relative text-sm md:text-base">
        <div className="w-[90%] mx-auto z-10 absolute top-36 md:top-40 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="animate-slidein500 opacity-0  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            PROFESSIONAL AUTO DETAILING
          </h1>
          <p className="animate-slidein700 opacity-0 text-xs md:text-base py-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
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
        <div>
          <Hero />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <Promos />
        </div>
        <section className="w-[90%] md:w-[80%] mx-auto">
          <article className="text-black  w-full ">
            <h2
              id="about-us"
              className=""
            >
              About Us
            </h2>
            <h4 className="">
              Who we are?
            </h4>
            <p>
              Detailing Guys is a highly-rated detailing company based in Apex,
              serving the Triangle area. We specialize in providing eco-friendly
              detailing solutions that keep your vehicle looking its best while
              caring for the environment.
            </p>
            <h4 className="">
              Our mission
            </h4>
            <p>
              Our mission is to deliver premium detailing results while using
              safe, environmentally-conscious products.
            </p>
            <h4 className="">
              Our values
            </h4>
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
              className=""
            >
              What is Detailing?
            </h2>
            <h4 className="">
              Detailing is more than a ‘wash and polish’.
            </h4>
            <p>
              Detailing goes beyond the usual wash. It's about using advanced
              techniques and safe, eco-friendly products to clean, restore, and
              protect your vehicle inside and out.
            </p>

            <h4 className="">
              Our approach
            </h4>
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
