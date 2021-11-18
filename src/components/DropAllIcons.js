import React, { useContext, useState, useEffect } from "react";
import DropIconsContext from "../context/DropIconsContext";

import { BsImages } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { RiHome2Fill } from "react-icons/ri";
import { AiFillRedditCircle } from "react-icons/ai";

import DropIcon from "./DropIcon";

function DropAllIcons() {
  const { handleToggle } = useContext(DropIconsContext);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const onResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    window.addEventListener("resize", handleToggle);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", handleToggle);
    };
  }, [windowSize, handleToggle]);

  return (
    <div className="drop-icon-position">
      <ul className="icons-wrapper">
        {windowSize <= 600 && (
          <DropIcon to="#home">
            <RiHome2Fill />
          </DropIcon>
        )}
        <DropIcon to="#search-img">
          <BsImages />
        </DropIcon>



        <DropIcon to="#img-day">
          <GiPerspectiveDiceSixFacesRandom />
        </DropIcon>

        <DropIcon to="#nav-reddit">
          <AiFillRedditCircle />
        </DropIcon>
      </ul>
    </div>
  );
}

export default DropAllIcons;
