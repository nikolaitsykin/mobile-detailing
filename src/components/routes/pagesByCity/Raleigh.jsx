import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../../../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import Hero from "../../Hero";
import Promos from "../../Promos";
import BookButtons from "../../UI/BookButtons";
import Button from "../../UI/Button";
import { ABOUT_PATH } from "../../../utils/constants";
import { businessName } from "../../../utils/data";

const RootRaleigh = () => {
  return (
    <main className="w-full bg-white">
      <div className="w-full bg-black">
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
      <div className="w-full object-cover h-[450px] flex justify-center items-center absolute top-28 md:top-40">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 uppercase text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Raleigh Professional Auto Detailing
          </h1>
          <p className="animate-slidein700 text-center opacity-0 text-xs md:text-base py-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service. Trust us to enhance and safeguard your
            vehicle with the care it deserves.
          </p>
          <div className="animate-slidein700 opacity-0">
            <BookButtons color="primary" />
          </div>
        </div>
      </div>
      <div className="z-100">
        <div>
          <Hero />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <Promos />
        </div>
        <section className="w-[90%] md:w-[80%] mx-auto">
          <article className="text-black w-full">
            <h2 id="about-us" className="">
              About Us
            </h2>
            <div className="">
              <h4 className="">Who we are?</h4>
              <p>
              {businessName} is a highly-rated detailing company based in
                Apex, serving the Triangle area. We specialize in providing
                eco-friendly detailing solutions that keep your vehicle looking
                its best while caring for the environment.
              </p>
            </div>
            <div className="pt-5">
              <h4 className="">Our mission</h4>
              <p>
                Our mission is to deliver premium detailing results while using
                safe, environmentally-conscious products.
              </p>
            </div>
            <div className="pt-5">
              <h4 className="">Our values</h4>
              <p>
                With experience detailing everything from family cars to
                high-performance vehicles, we aim to maintain your car's value
                and enhance your driving experience—all while keeping
                sustainability front and center.
              </p>
            </div>
            <div className="my-5 pt-5">
              <Link to={ABOUT_PATH}>
                <Button color="secondary" children="Learn More" />
              </Link>
            </div>
            <h2 id="what-is-detailing" className="">
              What is Detailing?
            </h2>
            <h4 className="">Detailing is more than a ‘wash and polish’.</h4>
            <p>
              Detailing goes beyond the usual wash. It's about using advanced
              techniques and safe, eco-friendly products to clean, restore, and
              protect your vehicle inside and out.
            </p>
            <h4 className="">Our approach</h4>
            <p>
              At {businessName}, we're committed to partner with brands which
              innovative products ensure high performance while protecting the
              environment. Their line of eco-friendly, pH-balanced chemicals
              guarantees that your vehicle receives the care it deserves without
              harmful effects on our planet.
            </p>
            <p className="text-black text-lg md:text-xl text-center my-10 font-medium">
              Choose {businessName} for results that protect both your car and
              the environment, powered by premium, eco-friendly products.
            </p>
            <div className="pb-10">
              <BookButtons color="secondary" />
            </div>
            <p className="text-white text-[1px]">
              Ceramic Coating Raleigh / Ceramic Coating Apex / Ceramic Coating
              Cary/ Ceramic Coating Holly Springs/ Ceramic Coating Garner /
              Paint Protection Film Raleigh / PPF Raleigh / PPF Apex / PPF Cary
              / PPF Holly Springs / PPF Garner / Modesta / Ceramic Coating /
              LLumar / STEK / GTechniq / Majestic Solutions / Detailing /
              {businessName} / Mobile Detailing Raleigh / Mobile Detailing Apex
              / Mobile Detailing Cary / Mobile Detailing Holly Springs / Mobile
              Detailing Garner / / Auto Detailing / Auto Detailing Raleigh /
              Auto Detailing Apex / Auto Detailing Cary / Auto Detailing
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default RootRaleigh;
