import React from "react";
import carImage from "../../assets/images/man-washing-his-car-garage_1157-26072.jpg";
import BookButtons from "../UI/BookButtons";

const AboutPage = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins">
      <div className="relative">
        <div className="w-[80%] mx-auto z-10 absolute top-40 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-4xl sm:text-5xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
            Professional Service, Personal Care
          </h1>
        </div>
        <div className="bg-black">
          <img
            className="w-full object-cover h-[450px] mx-auto opacity-40"
            src={carImage}
            alt="car"
          />
        </div>
      </div>
      <section>
        <article className="text-black text-sm md:text-base w-full flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl text-center text-black font-syne font-bold">
            About Detailing Guys
          </h2>
          <p className="py-2">
            At Detailing Guys, we're committed to making your car look its
            best—right from the convenience of your driveway. Our business is
            built on the belief that top-quality car care should be easy,
            professional, and stress-free. We bring our detailing expertise
            straight to you, ensuring your vehicle shines without you needing to
            go anywhere.
          </p>
          <div className=" items-center">
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-semibold">
              Our Story
            </h2>
            <p>
              Detailing Guys was born with a simple goal: to redefine car
              detailing for people with busy lives. Whether you're juggling
              family responsibilities, constantly on the move, or just love
              keeping your car in perfect condition, we understand that finding
              time for vehicle care isn't always easy. That's why we offer
              mobile detailing services that work around your schedule. As
              passionate car enthusiasts, we know how important it is to
              maintain your car's appearance, and we're here to help.{" "}
              <strong>
                No matter who you are or what you drive, we've got you covered.
              </strong>
            </p>
          </div>
          <div className=" items-center">
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-semibold">
              What Drives Us
            </h2>
            <p>
              Our mission is clear: to make your car shine, inside and out, with
              exceptional attention to detail. We use premium, eco-friendly
              products that are tough on dirt but gentle on the environment.
              Whether it's a quick cleanup or an in-depth detailing service, we
              ensure your car receives the same level of care we give our own.
            </p>
          </div>
          <div className=" items-center ">
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-semibold">
              Why Choose Detailing Guys?
            </h2>
            <ol>
              <li className="list-disc">
                <strong>We Come to You:</strong> Your time is valuable. We show
                up wherever it's most convenient for you—home, work, or anywhere
                else.
              </li>
              <li className="list-disc">
                <strong>Quality Above All:</strong> Our trained professionals
                deliver high-quality results every time, without cutting
                corners.
              </li>
              <li className="list-disc">
                <strong>Environmental-safe:</strong>We believe in protecting
                your car and the environment. That's why we exclusively use
                safe, eco-friendly Car Care products that offer outstanding
                results without harmful chemicals.
              </li>
              <li className="list-disc">
                <strong>Customer First:</strong> We treat every vehicle as if it
                were our own and every customer like family, making sure you
                love the way your car looks.
              </li>
            </ol>
          </div>
          <div className=" items-center">
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-semibold">
              The Detailing Guys Difference
            </h2>
            <p>
              Life can be hectic, and maintaining your car shouldn't be a
              hassle. Whether you need a simple refresh or a full detailing
              package, we bring flawless results right to your door. Spend less
              time worrying about your car's appearance and more time enjoying
              it.
            </p>
          </div>
          <div className=" items-center">
            <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-semibold">
              Ready to Experience a New Level of Care?
            </h2>
            <p className="text-black text-base md:text-lg font-syne font-semibold">
              Book with Detailing Guys today, and let us bring the shine to
              you—all while doing our part for the environment!
            </p>
          </div>
          <BookButtons color="secondary" />
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
