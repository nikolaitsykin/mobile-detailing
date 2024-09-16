import React from "react";
import ContactForm from "../ContactForm";

const Booking = () => {
  return (
    <div className="bg-white py-8 font-poppins">
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h1 className=" text-3xl text-center text-black my-3 font-syne font-semibold">
          REQUEST A QUOTE
        </h1>
        <article className="text-sm md:text-base text-start text-black">
          <p className="p-1  text-center">
            “Fill out our simple quote request form to get a personalized
            estimate for your project needs.”
          </p>
        </article>
        <div className=" my-3 text-black flex justify-center mx-auto mb-5 py-3 ">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Booking;
