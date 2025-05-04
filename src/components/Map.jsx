import React, { useEffect, useRef } from "react";
import { GOOGLE_MAPS_URL } from "../utils/constants";

const GoogleMap = () => {
  const iframeRef = useRef(null);

  const src = GOOGLE_MAPS_URL;

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage("message", "*"); // Optional: Send data to the iframe
    }
  }, []);

  return (
    <div id="google_map" className="w-full mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pr-0 md:pr-2">
          <h4 className="p-0 pb-1">Unparalleled Convenience</h4>
          <p className="pb-5 pr-5 md:pr-2 text-sm md:text-base">
            Enjoy the highest standard of vehicle care with our Mobile Car
            Detailing service. We understand that your time is valuable, which
            is why we bring expert auto detailing directly to your home, office,
            or anywhere in between. Our team uses eco-friendly, premium-grade
            products to deliver a thorough clean and restore your car’s
            shine—without disrupting your day. From deep interior cleaning to a
            flawless exterior finish, Spotless Auto Detailing ensures a
            personalized, high-quality experience every time. Book your mobile
            detailing service today and see the difference.
          </p>
        </div>
        <div>
          <iframe title="map" src={src} width="100%" height="400"></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
