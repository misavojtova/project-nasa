import React, { useEffect, useContext } from "react";
import FetchTodayContext from "../../context/FetchTodayContext";

import ImageVideo from "../../components/ImageVideo";
import DescriptionImage from "../../components/DescriptionImg";

import "./style.css";

function ImageDay() {
  const { onSubmitDate, photoData } = useContext(FetchTodayContext);

  useEffect(() => {
    onSubmitDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!photoData) return <div />;

  return (
    <div id="img-day">
      <ImageVideo />
      <DescriptionImage />
    </div>
  );
}

export default ImageDay;
