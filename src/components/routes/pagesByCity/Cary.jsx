import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../../../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import Hero from "../../Hero";
import Promos from "../../Promos";
import BookButtons from "../../UI/BookButtons";
import Button from "../../UI/Button";
import { ABOUT_PATH, BOOKING_PAGE_PATH } from "../../../utils/constants";
import { businessName, fullBusinessName } from "../../../utils/data";

const RootCary = () => {
  const currentCity = "Cary";

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero city={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <Promos />
        </div>
        <section className="w-[90%] md:w-[80%] mx-auto mt-5">
          <article className="text-black w-full">
            <h2 id="about-us">About Us</h2>
            <div className="">
              <h4 className="">Who we are?</h4>
              <p>
                {fullBusinessName} serves {currentCity} and surrounding areas. We
                specialize in providing eco-friendly detailing solutions that
                keep your vehicle looking its best while caring for the
                environment.
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
            <div className="pt-5">
              <h4 className="">Detailing is more than a ‘wash and polish’</h4>
              <p>
                Detailing goes beyond the usual wash. It's about using advanced
                techniques and safe, eco-friendly products to clean, restore,
                and protect your vehicle inside and out.
              </p>
            </div>
            <div className="pt-5">
              <h4 className="">Our approach</h4>
              <p>
                At {businessName}, we're committed to partner with brands which
                innovative products ensure high performance while protecting the
                environment. Their line of eco-friendly, pH-balanced chemicals
                guarantees that your vehicle receives the care it deserves
                without harmful effects on our planet.
              </p>
            </div>
            <p className="text-black text-lg md:text-xl text-center my-10 font-medium">
              Choose {businessName} for results that protect both your car and
              the environment, powered by premium, eco-friendly products.
            </p>
            <div className="pb-10">
              <div className="min-w-48">
                <Link to={BOOKING_PAGE_PATH}>
                  <Button children={"BOOK NOW"} color={"secondary"} />
                </Link>
              </div>
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
              Auto Detailing Apex / Auto Detailing Cary / Auto Detailing /
              mobile detailing near me / apex mobile detailing /
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default RootCary;
