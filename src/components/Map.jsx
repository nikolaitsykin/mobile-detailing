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
    <div id="google_map" className="w-full my-5">
      <div>
        <iframe title="map" src={src} width="100%" height="400"></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
