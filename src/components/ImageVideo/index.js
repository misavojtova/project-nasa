import React, { useContext } from "react";
import FetchTodayContext from "../../context/FetchTodayContext";

import "./style.css";

function ImageVideo() {
  const { photoData } = useContext(FetchTodayContext);
  return (
    <div className="img-wrapper">
      {photoData.media_type === "image" && (
        <img src={photoData.url} alt={photoData.title} />
      )}
      {photoData.media_type === "video" && (
        <iframe
          className="video-random"
          src={photoData.media_type === "video" && photoData.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default ImageVideo;
