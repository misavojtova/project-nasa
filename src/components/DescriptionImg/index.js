import React, { useContext, useState } from "react";
import FetchTodayContext from "../../context/FetchTodayContext";
import TextRandom from "../TextRandom";
import ImgInput from "../ImgInput";

import "./style.css";

function DescriptionImage() {
  const [showText, setShowText] = useState(false);

  const { photoData } = useContext(FetchTodayContext);
  return (
    <div className="desc-img-wrapper">
      <h2 className="desc-title">{photoData.title}</h2>
      <h2 className="desc-date">{photoData.date}</h2>

      {showText ? (
        <TextRandom />
      ) : (
        <div className="read-less-wrapper">
          <p className="read-less">{photoData.explanation}</p>
        </div>
      )}

      <button
        className="button-read-more"
        onClick={() => setShowText(!showText)}
      >
        {showText ? "Read Less" : "Read More"}
      </button>
      <ImgInput />
    </div>
  );
}

export default DescriptionImage;
