import React, { useState } from "react";

function Card({ handleChangeCards }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChangeStyle = () => {
    handleChangeCards();
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      <div className={buttonClicked ? "card2" : "card"}>
        <div className="card-content">
          <h2 className="card-title">Hover the Black Hole</h2>
          <br />
          <h3 className="card-title-mobile">Click the Black Hole</h3>
          <br />
          <p className="card-body">
            Click Visit to display a few more topics to feed your knowledge
            about space, when selected click the image to enter the black hole
            and get transfered where you chose
          </p>
          <br />
        </div>
      </div>
      <div className="button-card-container">
        <button className="button-card" onClick={handleChangeStyle}>
          {buttonClicked ? "Close" : "Visit"}
        </button>
      </div>
    </>
  );
}
export default Card;
