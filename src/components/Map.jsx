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
            Enjoy the highest degree of vehicle maintenance with our Mobile Car
            Detailing. Your schedule matters, so we bring expert auto detailing
            to you at your home, office, or anywhere in between. Our
            professional technicians use green, high-quality materials to
            provide your vehicle with a detail clean and revive the
            sparkle—without missing a beat in your day. From meticulous interior
            cleansing to a flawless exterior finish, Spotless Auto Detailing
            promises an exceptional, tailored experience every time. Book your
            mobile detail appointment today and feel the difference.
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
