import React from "react";
import PlanetVideo from "../assets/videos/planet-video2.mp4";

function BackgroundVideo() {
  return (
    <div className="bgVideo">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          zIndex: "-1",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          display: "flex",
        }}
      >
        <source src={PlanetVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}
export default BackgroundVideo;
