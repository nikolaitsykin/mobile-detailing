import React from "react";
import ContactForm from "./ContactForm";

const Booking = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[75%] mx-auto">
        <h1 className=" text-xl text-center text-black my-3">Contact Form</h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          <p className="p-1  text-center">
            “Fill out our simple quote request form to get a personalized
            estimate for your project needs.”
          </p>
        </article>
        <div className="bg-gray my-3 text-black flex justify-center mx-auto mb-5 py-3 rounded-xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Booking;
