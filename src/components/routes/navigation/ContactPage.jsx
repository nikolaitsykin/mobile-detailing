import React from "react";
import { CONTACT_PATH } from "../../../utils/constants";
import ContactForm from "../../ContactForm";
import SEO from "../../SEO";

const ContactPage = () => {
  return (
    <div id="contact" className="bg-white">
      <SEO
        type="ContactPage"
        name="Contact Spotless Auto Detailing"
        title="Contact Us | Spotless Auto Detailing in Raleigh, NC"
        description="Have questions or need to book a service? Contact Spotless Auto Detailing in Raleigh. Call or text 919-906-0099 or book online today!"
        canonical={CONTACT_PATH}
      />

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
