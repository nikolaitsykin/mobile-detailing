import React, { useEffect, useRef } from "react";

const EmbedWidget = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage("message", "*"); // Optional: Send data to the iframe
    }
  }, []);

  return (
    <div>
      <h2>What our customers say</h2>
      <iframe
        ref={iframeRef}
        src={src}
        title="Embed Widget"
        width="100%"
        height="450px"
      />
    </div>
  );
};

export default EmbedWidget;
