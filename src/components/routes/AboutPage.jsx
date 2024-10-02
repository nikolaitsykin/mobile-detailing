import React from "react";
import BookButtons from "../UI/BookButtons";
import image from "../../assets/images/man-washing-his-car-garage_1157-26072.jpg";

const AboutPage = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[450px] mx-auto opacity-50"
          src={image}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[450px] flex justify-center items-center absolute top-24 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            ABOUT
          </h1>
        </div>
      </div>
      <section>
        <article className="text-black flex flex-col justify-center py-5">
          <h2 className="p-5">Our Story</h2>{" "}
          <p>
            {" "}
            Hi! I'm Nik, the owner of Detailing Guys. My passion for car care
            started with my own vehicles and quickly extended to helping family
            and friends keep their cars in top shape. What began as a hobby has
            now evolved into Detailing Guys, where I’m proud to offer the same
            level of detail-oriented service to a broader community. Our goal is
            simple: to redefine car detailing for people with busy lives. Since
            I still maintain a day-to-day job and prioritize my family, we
            operate during evenings and weekends to fit seamlessly into your
            schedule. As a car enthusiast, I understand the importance of
            maintaining your vehicle’s appearance, and I’m committed to bringing
            that same level of care to yours. When I’m not detailing, I’m
            spending time with my family, hiking in local parks, or biking
            trails, always looking for new ways to enhance our eco-friendly
            approach. At Detailing Guys, we ensure your car shines—while making
            the process effortless for you.{" "}
          </p>
          <h2 className="p-5">What Drives Us</h2>{" "}
          <p>
            {" "}
            Our mission is simple: to give your car the meticulous care it
            deserves, inside and out. Using premium, eco-friendly products, we
            take pride in providing outstanding results without harming the
            environment. Whether it's a quick refresh or a full detailing
            package, we treat every vehicle with the same level of care as if it
            were our own.{" "}
          </p>{" "}
          <h2 className="p-5">Why Choose Detailing Guys?</h2>{" "}
          <ul className="pl-5">
            {" "}
            <li className="list-disc">
              {" "}
              <strong>We Come to You:</strong> We understand how valuable your
              time is. That’s why we bring our service to you—whether at home,
              work, or wherever is most convenient.{" "}
            </li>{" "}
            <li className="list-disc">
              {" "}
              <strong>Quality Without Compromise:</strong> Our trained
              professionals consistently deliver high-quality results, focusing
              on every detail, without cutting corners.{" "}
            </li>{" "}
            <li className="list-disc">
              {" "}
              <strong>Eco-Friendly Products:</strong> We're committed to
              protecting both your vehicle and the environment by using
              eco-friendly car care products that deliver great results without
              harmful chemicals.{" "}
            </li>{" "}
            <li className="list-disc">
              {" "}
              <strong>Customer-Centered Service:</strong> Every customer is
              treated like family, and every car gets the same attention to
              detail as if it were our own.{" "}
            </li>{" "}
          </ul>{" "}
          <h2 className="p-5">The Detailing Guys Difference</h2>{" "}
          <p>
            {" "}
            We know life gets busy, and keeping your car looking great shouldn't
            be a hassle. Whether you’re looking for a quick refresh or a full
            detailing experience, we deliver flawless results right to your
            door—so you can spend less time worrying about your car and more
            time enjoying it.{" "}
          </p>{" "}
          <h2 className="p-5">Ready to Experience a New Level of Care?</h2>{" "}
          <p className="text-base md:text-lg font-syne font-semibold">
            {" "}
            Book with Detailing Guys today and let us bring the shine to you—all
            while doing our part to care for the environment!{" "}
          </p>{" "}
          <BookButtons color="secondary" />
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
