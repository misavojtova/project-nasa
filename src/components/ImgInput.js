import React, { useContext } from "react";
import FetchTodayContext from "../context/FetchTodayContext";

import { BsSearch } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";

function ImgInput() {
  const { ErrorMessage, onSubmitDate, setTrackValue, date, hide } =
    useContext(FetchTodayContext);
  return (
    <div className="input-search-wrapper">
      <span id="question-mark">{<AiFillQuestionCircle />}</span>
      <p id="question-mark-text">{`Input date from 1995-06-16 to ${date}`}</p>
      <input
        id="date"
        className="random-img-input"
        type="text"
        maxLength="10"
        pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
        onChange={e => setTrackValue(e.target.value)}
        placeholder="YYYY-MM-DD"
      ></input>
      <span className="random-img-search-btn" onClick={onSubmitDate}>
        {<BsSearch />}
      </span>

      <p className="error-message" id={hide ? "hide" : null}>
        {ErrorMessage}
      </p>
    </div>
  );
}

export default ImgInput;
