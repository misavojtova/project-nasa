import React, { useContext } from "react";
import DropIconsContext from "../context/DropIconsContext";
import logo from "../assets/images/nasa-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Logo({ to }) {
  const { handleToggle, isOpen } = useContext(DropIconsContext);
  return (
    <div className="logo-wrap">
      <AnchorLink href={to}>
        <img
          className="logo"
          onClick={isOpen ? handleToggle : null}
          src={logo}
          alt=""
        />
      </AnchorLink>
    </div>
  );
}
export default Logo;
