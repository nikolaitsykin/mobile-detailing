import React from "react";
import img from "../../assets/images/car-wash-detailing-station.jpg";
import { membershipBenefits, monthly, biWeekly } from "../../data";
import Card from "../Card";
import Button from "../UI/Button";

const Membership = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <h1 className=" text-3xl text-center text-black my-3">
          Prime Membership: Shine All Year Long
        </h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          <p className=" p-2">
            At Prime, we believe your vehicle deserves the best care, not just
            once in a while, but all year round. That’s why we’ve created the
            Prime Membership — a convenient and cost-effective way to keep your
            car looking its best, inside and out, with regular detailing at
            exclusive member-only rates.
          </p>
          <div className="bg-gray text-black rounded-xl p-3">
            <h2 className=" text-lg ">Membership Benefits:</h2>
            <ul className="text-sm px-4 ">
              {membershipBenefits.map((benefit) => (
                <li key={benefit} className="list-disc leading-5 py-1">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-lg  text-center mt-7 text-black">
            Subscription Plans
          </h2>
          <div className="text-black rounded-xl">
            <h3 className=" text-md text-center md:text-start px-3 py-1">
              Choose the plan that fits your lifestyle:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center bg-gray rounded-xl">
              <Card
                title={biWeekly.title}
                services={biWeekly.service}
                image={img}
                price={biWeekly.prices}
                packageType={biWeekly.package}
                discount={biWeekly.discount}
              />

              <Card
                title={monthly.title}
                services={monthly.service}
                image={img}
                price={monthly.prices}
                packageType={monthly.package}
                discount={monthly.discount}
              />
            </div>
          </div>
          <p className="my-1 text-sm md:text-base p-3">
            Join the Prime Membership today and keep your vehicle in showroom
            condition all year long. Sign up now to start enjoying the benefits
            of regular, high-quality detailing with the added bonus of exclusive
            savings!
          </p>
          <div className="flex justify-center mb-5">
            <Button children={"Become a Member"} color={"secondary"} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Membership;
