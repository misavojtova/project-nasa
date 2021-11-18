import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HomeNav({ to, children }) {
  return (
    <li className="home-nav">
      <AnchorLink href={to}>
        <span>{children}</span>
      </AnchorLink>
    </li>
  );
}

export default HomeNav;
