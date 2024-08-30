import React from "react";

const Footer = () => {
  const links = [
    "Auto Detailing",
    "Paint Correction",
    "Headlight Restoration",
    "Ceramic Coating",
    "PPF",
  ];
  return (
    <footer className=" bg-dark-gray min-h-48 py-10 ">
      <section className="w-[80%] mx-auto">
        <div className="flex justify-evenly flex-col md:flex-row">
          <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3 px-4 flex justify-start ">
            <div className="min-w-48">
              <h2 className="text-white text-md md:text-lg font-semibold">
                Prime Detailing
              </h2>
              <p className="text-xs md:text-sm text-white font-light py-2">
                Prime is your premier destination for top-notch automotive
                detailing services. We specialize in enhancing the beauty of
                your vehicle through meticulous care and superior products.
                Discover a new level of brilliance for your car with Prime
                Detailing!
              </p>
            </div>
          </div>
          <div className="flex basis-1/2 md:basis-2/3 ">
            <div className="basis-1/2 px-4">
              <div className="flex flex-col min-w-42">
                <h2 className="font-semibold text-md md:text-lg text-white">
                  Links
                </h2>
                <ul className="pt-2">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="text-white text-xs sm:text-sm md:text-md font-light decoration-1 py-1 border-b border-gray"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="basis-1/2 px-4">
              <div className="min-w-42">
                <h2 className="font-semibold text-md md:text-lg text-white mb-3">
                  Adress
                </h2>
                <span className="text-white text-xs sm:text-sm md:text-md font-light my-3">
                  Cary | Apex | Holly Springs
                </span>
              </div>
              <div className="pt-3">
                <h2 className="font-semibold text-md md:text-lg text-white">
                  Open Hours
                </h2>
                <span className="text-start text-white text-xs sm:text-sm md:text-md font-light">
                  <p>MON-FRI 5-8PM </p>
                  <p>SAT-SUN 9-5PM</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
