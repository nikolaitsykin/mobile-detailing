import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    "Auto Detailing",
    "Paint Correction",
    "Ceramic Coating",
    "PPF",
  ];

  const businessAddress = "219 N Salem St, Apex, NC 27502";
  const businessHours = ["MON-FRI 5-8PM", "SAT-SUN 9-5PM"];

  return (
    <footer className="relative bg-black min-h-48 py-10 text-gray text-xxs sm:text-xs md:text-sm">
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3 px-4 flex justify-start">
          <div className="min-w-48">
            <h5 className="text-white font-poppins font-medium">
              Detailing Guys
            </h5>
            <p className=" pt-3">
              Based in Apex, we serve the Triangle area with top-tier mobile
              automotive detailing. We specialize in ceramic coating, paint
              protection film & paint restoration—bringing high-quality care
              directly to you.
            </p>
          </div>
        </div>
        <div className="flex basis-1/2 md:basis-2/3">
          <div className="basis-1/2 px-4">
            <div className="flex flex-col min-w-42">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Links
              </h5>
              <ul className="">
                {footerLinks.map((link) => (
                  <li
                    key={link}
                    className="text-gray hover:text-white decoration-1 py-1 border-b border-gray"
                  >
                    <NavLink to={`/${link}`}>{link}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/2 px-4 ">
            <div className="">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Address
              </h5>
              <span className=" md:text-md">{businessAddress}</span>
            </div>
            <div className="pt-2 md:pt-3 ">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Open Hours
              </h5>
              <span className="  flex flex-col ">
                {businessHours.map((hour) => (
                  <p key={hour} className="pr-2">
                    {hour}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
