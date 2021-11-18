import React, { useContext } from "react";
import FetchTodayContext from "../context/FetchTodayContext";

function TextRandom() {
  const { photoData } = useContext(FetchTodayContext);
  return (
    <div className="read-more-wrapper">
      <p className="read-more">{photoData.explanation}</p>
    </div>
  );
}

export default TextRandom;
