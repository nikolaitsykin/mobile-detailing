import React, { useEffect, useRef } from "react";
import { GOOGLE_REVIEWS_URL } from "../utils/constants";

const EmbedWidget = () => {
  const iframeRef = useRef(null);

  const src = GOOGLE_REVIEWS_URL;

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage("message", "*"); // Optional: Send data to the iframe
    }
  }, []);

  return (
    <div>
      <h2 className="pb-0">What our customers say</h2>
      <iframe
        ref={iframeRef}
        src={src}
        title="Embed Widget"
        width="100%"
        height="510px"
      />
    </div>
  );
};

export default EmbedWidget;
