import React from "react";
import "./style.css";

function ImageVideoModal({ toggleModal, selectedImg }) {
  return (
    <div className="modal">
      <a className="close" onClick={toggleModal}>
        &times;
      </a>
      <div className="header">{selectedImg.alt}</div>
      <img className="modal-img" src={selectedImg.href} alt={selectedImg.alt} />
      <div className="description">{selectedImg.description}</div>
    </div>
  );
}

export default ImageVideoModal;
