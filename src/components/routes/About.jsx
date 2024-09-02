import React from "react";

const About = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <h1 className=" text-xl text-center text-black my-3">
          Our Story: Family, Cars, and a New Beginning
        </h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          <p className="p-2 text-start">
            In 2022, our family made the move to North Carolina, drawn by the
            opportunities and the beauty of this state. After over a decade of
            working a 9-to-5 job, I realized it was time for a change. My
            passion for cars and commitment to quality led me to turn a lifelong
            hobby into a business—Prime Detailing. As a car enthusiast, I've
            always taken pride in keeping vehicles in top condition, whether it
            was my own car or helping out friends and family. To me, a car is
            more than just a way to get from point A to point B; it’s a
            reflection of its owner. The joy of seeing a car restored to its
            pristine state is what inspired me to start this venture. Together
            with my wife, we built Prime Detailing from the ground up, ensuring
            that every service we provide reflects our dedication to excellence.
            As a family-owned and operated business, we understand the value of
            trust, quality, and personalized service. We treat every vehicle as
            if it were our own, paying attention to every detail and using only
            the best products and techniques. Our goal is to deliver a detailing
            experience that goes beyond expectations, leaving your car looking
            and feeling like new.
          </p>
        </article>
        <div className="bg-gray my-3 rounded-xl">
          <div>
            <img
              src="../../assets/images/car-wash-detailing-station.jpg"
              alt=""
            />
          </div>
          <div>
            <p>Meet Nik, our founder and Lead Detailer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
