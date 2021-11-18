import React, { useContext } from "react";
import DropIconsContext from "../../context/DropIconsContext";

import HomeNav from "../HomeNav";
import DropAllIcons from "../DropAllIcons";
import HamMenu from "../HamMenu";
import Logo from "../Logo";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome2Fill } from "react-icons/ri";

import "./style.css";

function Nav() {
  const { isOpen } = useContext(DropIconsContext);

  return (
    <>
      <Logo to="#home" />

      <ul className="nav-list">
        <HomeNav to="#home">
          <RiHome2Fill />
        </HomeNav>
        <HamMenu icon={<GiHamburgerMenu />} />
      </ul>

      {isOpen && <DropAllIcons />}
    </>
  );
}

export default Nav;
