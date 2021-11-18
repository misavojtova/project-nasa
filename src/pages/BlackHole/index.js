import React, { useState } from "react";

import Card from "../../components/Card";
import DisplayCards from "../../components/DisplayCards";

import "./style.css";

function BlackHole() {
  const [changeCards, setChangeCards] = useState("container-display");

  const handleChangeCards = () => {
    if (
      changeCards === "container-display" ||
      changeCards === "container-display3"
    ) {
      setChangeCards("container-display2");
    } else {
      setChangeCards("container-display3");
    }
  };

  return (
    <div id="nav-reddit" className="reddit">
      <Card handleChangeCards={handleChangeCards} />
      <DisplayCards changeCards={changeCards} />
    </div>
  );
}

export default BlackHole;
