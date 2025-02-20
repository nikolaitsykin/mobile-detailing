import React from "react";
import { businessName, fullBusinessName } from "../../../utils/data";
import Banner from "../../Banner";
import BookButtons from "../../UI/BookButtons";

const AboutPage = () => {

  return (
    <div id="about" className="w-full z-20 bg-white font-poppins">
      <Banner
        image="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-washing-his-car-garage_1157-26072.jpg"
        header="About"
        alt={"Mobile Detailing Service Technician performing car detailing | Spotless Auto Detailing"}
      />
      <section>
        <article className="text-black flex flex-col justify-center">
          <h2 className="">Professional Service, Personal Care</h2>
          <p className="py-2">
            At {fullBusinessName}, we’re dedicated to making your car look its
            best—from the comfort of your driveway. Our service combines
            top-tier car care with convenience, bringing expertise and a
            personal touch directly to you, so you can enjoy a spotless vehicle
            without stepping out.
          </p>
          <h2 className=" p-5">Our Story</h2>
          Hi! I'm Nik, the owner of {fullBusinessName}. What started as a
          passion for taking care of my own car quickly grew into helping family
          and friends. Now, I'm excited to share that same care and attention
          with you. {businessName} was created with a simple goal: to make car
          detailing easier for people with busy lives. Whether you’re juggling
          family responsibilities, constantly on the move, or simply love
          keeping your car in top shape, we understand how hard it can be to
          find time for vehicle care. That’s why we offer mobile detailing
          services that work around your schedule. As passionate car
          enthusiasts, we’re here to help you maintain your car’s appearance,
          whenever and wherever it’s most convenient for you. No matter who you
          are or what you drive, we've got you covered.
          <h2 className=" p-5">What Drives Us</h2>
          <p>
            Our mission is to provide top-quality, eco-friendly detailing that
            enhances your vehicle inside and out. We’re passionate about using
            safe, premium products that are tough on dirt but kind to the
            environment. From quick refreshes to deep detailing, we ensure your
            car looks its best with the utmost care.
          </p>
          <h2 className=" p-5 ">Why Choose {businessName}?</h2>
          <ul className="pl-5">
            <li className="list-disc">
              <strong>We Come to You:</strong> Enjoy the convenience of mobile
              detailing where it’s easiest for you, be it at home, work, or any
              other location.
            </li>
            <li className="list-disc">
              <strong>Quality Above All:</strong> Our trained professionals
              prioritize quality, ensuring your car looks flawless after every
              service.
            </li>
            <li className="list-disc">
              <strong>Eco-Friendly Products:</strong> Our products are both
              effective and environmentally conscious, offering superior results
              without harsh chemicals.
            </li>
            <li className="list-disc">
              <strong>Customer-Centric Approach:</strong> We treat each vehicle
              with care and each customer with respect, ensuring satisfaction
              with every service.
            </li>
          </ul>
          <h2 className=" p-5 ">The {businessName} Difference</h2>
          <p>
            Life is busy, but keeping your car clean doesn’t have to be. We
            offer convenient, high-quality detailing that fits into your
            schedule, helping you spend more time enjoying your car and less
            time worrying about its appearance.
          </p>
          <h2 className=" p-5 ">Ready to Experience a New Level of Care?</h2>
          <p className=" text-base md:text-lg">
            Schedule your appointment with {businessName} today and experience
            the convenience and quality of mobile detailing—all while supporting
            eco-friendly practices.
          </p>
          <div className="py-10">
            <BookButtons color="secondary" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
