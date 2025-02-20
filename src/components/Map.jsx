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
            Experience the ultimate in automotive care with our Mobile Car
            Detailing service. Life's demands can be overwhelming, but
            maintaining a spotless clean car doesn't have to be. Our Mobile
            Detailing Services work around your busy schedule, ensuring your
            vehicle receives the premium care and attention it deserves without
            disrupting your day rigth on your doorstep. Whether you're at home,
            the office, or anywhere in between, our team guarantees a
            comprehensive and eco-friendly detailing experience tailored to your
            needs. Get your car spotless and shining without lifting a finger!
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
