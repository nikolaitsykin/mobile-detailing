import React from "react";
import ContactForm from "../../ContactForm";

const ContactPage = () => {

  return (
    <div id="contact" className="bg-white">
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h1 className=" text-3xl text-center text-black my-3 pt-10">
          Contact Us
        </h1>
        <article className=" text-black">
          <p className="p-1  text-center">
            “Fill out our simple quote request form to get a personalized
            estimate for your project needs.”
          </p>
        </article>
        <div className=" text-black flex justify-center mx-auto mb-5 py-3 ">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
