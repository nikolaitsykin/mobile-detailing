import React from "react";
import ContactForm from "../../ContactForm";

const ContactPage = () => {
  return (
    <div id="contact" className="bg-white">
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Contact Us{" "}
        </h1>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto">
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
