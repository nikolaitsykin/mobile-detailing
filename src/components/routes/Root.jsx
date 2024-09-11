import React from "react";
import detailingVideo from "../../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import BookButtons from "../BookButtons";
import Hero from "../Hero";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <main className="w-full z-20 bg-white pb-8 font-poppins">
      <div className="relative text-sm md:text-base">
        <div className="w-[90%]  mx-auto z-10 absolute top-36 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-3xl sm:text-4xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
            PRIME AUTO DETAILING
          </h1>
          <p className=" animate-slidein500 opacity-0 md:text-base text-white pt-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service at the best prices. Trust us to enhance
            and safeguard your vehicle with the care it deserves.
          </p>
          <BookButtons color={"primary"} />
        </div>
        <div className="bg-black">
          <video
            className="opacity-60 object-cover min-h-[550px] md:h-[600px] w-full mx-auto"
            autoPlay
            loop
            playsInline
            muted
            type="video/mp4"
            src={detailingVideo}
          />
        </div>
        <Hero />
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div>
            <article className="text-black text-sm md:text-base w-full flex flex-col justify-center">
              <h2
                id="about-us"
                className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold"
              >
                ABOUT US
              </h2>
              <h3 className="text-black text-base md:text-lg font-syne font-semibold">
                Who we are?
              </h3>
              <p>
                Detailing Guys is a highly-rated detailing company based in
                Apex, serving the Triangle area. We specialize in providing
                eco-friendly detailing solutions that keep your vehicle looking
                its best while caring for the environment. From entry-level
                services to advanced paint correction and ceramic coatings, we
                ensure that your car is well-protected and looking sharp.
              </p>
              <br />
              <br />
              <h3 className="text-black text-base md:text-lg font-syne font-semibold">
                Our mission
              </h3>
              <p>
                Our mission is to deliver premium detailing results while using
                safe, environmentally-conscious products. That's why we use
                brands known for their eco-friendly, biodegradable formulations
                that are safe for you, your kids, your pets, your car and gentle
                on the planet. We believe in doing our part to reduce
                environmental impact, offering sustainable solutions that
                protect your vehicle without compromising our commitment to the
                earth.
              </p>
              <br />
              <br />
              <h3 className="text-black text-base md:text-lg font-syne font-semibold">
                Our values
              </h3>
              <p>
                With experience detailing everything from family cars to
                high-performance vehicles, we aim to maintain your car's value
                and enhance your driving experience—all while keeping
                sustainability front and center.
              </p>
            </article>
            <div className="my-5 pt-5">
              <Link to={"/about"}>
                <Button color={"secondary"} children={"Learn More"} />
              </Link>
            </div>
          </div>
          <div>
            <article className="text-black text-sm md:text-base w-full flex flex-col justify-center">
              <h2
                id="what-is-detailing"
                className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold"
              >
                WHAT IS ‘DETAILING’?
              </h2>
              <h3 className="text-black text-base md:text-lg font-syne font-semibold">
                Detailing
              </h3>
              <p>
                Detailing goes beyond the usual wash. It’s about using advanced
                techniques and safe, eco-friendly products to clean, restore,
                and protect your vehicle inside and out. Whether it’s paint
                correction, interior deep cleaning, or restoring surfaces,
                detailing is about bringing your car back to life.
              </p>
              <br />
              <br />
              <h3 className="text-black text-lg font-syne font-semibold">
                Our approach
              </h3>
              <p>
                At Detailing Guys, we’re committed to partner with brands which
                innovative products ensure high performance while protecting the
                environment. Their line of eco-friendly, pH-balanced chemicals
                guarantees that your vehicle receives the care it deserves
                without harmful effects on our planet. From daily drivers to
                luxury vehicles, we make sure your car looks great, and our
                world stays healthy.
              </p>
            </article>
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold my-10">
              {" "}
              Choose Detailing Guys for results that protect both your car and
              the environment, powered by premium, eco-friendly products.
            </h2>
          </div>
          <div className="w-[90%] md:w-[80%] mx-auto mb-10">
            <BookButtons color={"secondary"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Root;
