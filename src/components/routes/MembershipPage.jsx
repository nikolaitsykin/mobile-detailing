import React from "react";
import img from "../../assets/images/car-wash-detailing-station.jpg";
import { membershipBenefits, monthly, biWeekly } from "../../utils/data";
import Card from "../Card";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <div></div>
        <h1 className=" text-3xl text-center text-black my-3">
          Membership: Shine All Year Long
        </h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          <p className=" p-2">
            At Detailing Guys, we believe your vehicle deserves the best care, not just
            once in a while, but all year round. That’s why we’ve created the
            Membership — a convenient and cost-effective way to keep your
            car looking its best, inside and out, with regular detailing at
            exclusive member-only rates.
          </p>
        </article>
        <div className=" text-black  p-3">
          <h2 className=" text-lg ">Membership Benefits:</h2>
          <ul className="text-sm px-4 ">
            {membershipBenefits.map((benefit) => (
              <li key={benefit} className="list-disc leading-5 py-1">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-lg  text-center mt-7 text-black font-poppins">
          Subscription Plans
        </h2>
        <div className="text-black ">
          <h3 className=" text-md text-center md:text-start px-3 py-1">
            Choose the plan that fits your lifestyle:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center  ">
            <Card
              title={biWeekly.title}
              services={biWeekly.service}
              image={img}
              priceTable={biWeekly.prices}
              packageType={biWeekly.package}
              discount={biWeekly.discount}
            />

            <Card
              title={monthly.title}
              services={monthly.service}
              image={img}
              priceTable={monthly.prices}
              packageType={monthly.package}
              discount={monthly.discount}
            />
          </div>
        </div>
        <p className="my-1 text-sm md:text-base p-3">
          Join the Membership today and keep your vehicle in showroom
          condition all year long. Sign up now to start enjoying the benefits of
          regular, high-quality detailing with the added bonus of exclusive
          savings!
        </p>
        <div className="flex justify-center mb-5">
          <Link className="w-[80%] flex justify-center items-center" to="/membership">
            <Button children={"Become a Member"} color={"secondary"} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Membership;
