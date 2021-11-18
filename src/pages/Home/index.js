import React from "react";

import Title from "../../components/Title";
import Nav from "../../components/Nav";
import BackgroundVideo from "../../components/BackgroundVideo";

import "./style.css";

function Home() {
  return (
    <div id="home">
      <div className="header"></div>
      <Nav />
      <Title />
      <BackgroundVideo />
    </div>
  );
}

export default Home;
