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
        <article className="text-black flex flex-col justify-center">
          <h2 className="">Professional Service, Personal Care</h2>
          <p className="py-2">
            At Detailing Guys, we're committed to making your car look its
            best—right from the convenience of your driveway. Our business is
            built on the belief that top-quality car care should be easy,
            professional, and stress-free. We bring our detailing expertise
            straight to you, ensuring your vehicle shines without you needing to
            go anywhere.
          </p>
          <div className=" items-center">
            <h2 className=" p-5">Our Story</h2>
            <p>
              Hi! I'm Nik, the owner of Detailing Guys. I started this business
              out of a passion for taking care of cars—starting with my own,
              then extending to family and friends. Now, I’m excited to bring
              that same level of care and attention to you. Detailing Guys was
              founded with a simple goal: to redefine car detailing for people
              with busy lives. Whether you’re juggling family responsibilities,
              constantly on the move, or just want to keep your car in top
              shape, I understand that finding time for vehicle care isn’t
              always easy. That’s why we offer mobile detailing services that
              fit around your schedule. As a car enthusiast, I know how
              important it is to maintain your car’s appearance, and I’m here to
              help. When I’m not detailing, I’m spending time with my family,
              hiking local parks, or biking the trails. I’m also always looking
              for ways to improve our eco-friendly services.
            </p>
          </div>
          <div className=" items-center">
            <h2 className=" p-5">What Drives Us</h2>
            <p>
              Our mission is clear: to make your car shine, inside and out, with
              exceptional attention to detail. We use premium, eco-friendly
              products that are tough on dirt but gentle on the environment.
              Whether it's a quick cleanup or an in-depth detailing service, we
              ensure your car receives the same level of care we give our own.
            </p>
          </div>
          <div className="items-center ">
            <h2 className=" p-5 ">Why Choose Detailing Guys?</h2>
            <ul className="pl-5">
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
            </ul>
          </div>
          <div className=" items-center">
            <h2 className=" p-5 ">The Detailing Guys Difference</h2>
            <p>
              Life can be hectic, and maintaining your car shouldn't be a
              hassle. Whether you need a simple refresh or a full detailing
              package, we bring flawless results right to your door. Spend less
              time worrying about your car's appearance and more time enjoying
              it.
            </p>
          </div>
          <div className=" items-center">
            <h2 className=" p-5 ">Ready to Experience a New Level of Care?</h2>
            <p className=" text-base md:text-lg font-syne font-semibold">
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
