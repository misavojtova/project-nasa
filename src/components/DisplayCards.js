import React, { useState } from "react";

function DisplayCards({ changeCards }) {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1629898592917-00ca6b187c89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      redirect: "https://www.reddit.com/r/nasa",
    },
    {
      src: "https://images.unsplash.com/photo-1519241678948-28f18681ce14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      redirect: "https://www.reddit.com/r/spacex/",
    },
    {
      src: "https://images.pexels.com/photos/412026/pexels-photo-412026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      redirect: "https://www.reddit.com/r/space/",
    },
    {
      src: "https://images.unsplash.com/photo-1546979348-7a211780ad7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80",
      redirect: "https://www.reddit.com/r/moon/",
    },
    {
      src: "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      redirect: "https://www.reddit.com/r/Astronomy/",
    },
  ];

  const handleRedirect = redirect => {
    window.open(redirect);
  };
  return (
    <div className={changeCards}>
      {images.map(image => (
        <img
          className="img-show"
          src={image.src}
          alt=""
          onClick={() => handleRedirect(image.redirect)}
        />
      ))}
    </div>
  );
}

export default DisplayCards;
