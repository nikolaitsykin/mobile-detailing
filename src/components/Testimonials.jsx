import React from "react";
import Slider from "react-slick";
import { testimonialItems } from "../utils/data";
import TestimonalItem from "./TestimonalItem";

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const slidesToShow = windowWidth > 792 ? (windowWidth > 1200 ? 3 : 2) : 1;

  React.useEffect(() => {
    let cb = function () {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    centerPadding: "10px",
  };

  return (
    <div id="testimonials" className="w-full mb-8">
      <h2 className="text-center text-black pt-5">What Our Clients Say</h2>
      <Slider {...settings} className="w-full px-5">
        {testimonialItems.map((item, index) => (
          <TestimonalItem key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
