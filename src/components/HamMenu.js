import React, { useContext } from "react";
import DropIconsContext from "../context/DropIconsContext";

const HamMenu = ({ icon }) => {
  const { isOpen, handleToggle } = useContext(DropIconsContext);
  return (
    <li className="ham-menu" checked={isOpen} onClick={handleToggle}>
      {icon}
    </li>
  );
};

export default HamMenu;
