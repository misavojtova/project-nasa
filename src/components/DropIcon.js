import React, { useContext } from "react";
import DropIconsContext from "../context/DropIconsContext";

import AnchorLink from "react-anchor-link-smooth-scroll";

const DropdownItem = ({ children, to }) => {
  const { handleToggle } = useContext(DropIconsContext);

  return (
    <>
      <AnchorLink href={to} className="nav-icon-drop" onClick={handleToggle}>
        <span>{children}</span>
      </AnchorLink>
    </>
  );
};

export default DropdownItem;
