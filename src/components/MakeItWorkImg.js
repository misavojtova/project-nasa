import React, { useState, useEffect } from "react";
import SearchImg from "./ImgSearchForm";
import ImgList from "./ImgList";

function MakeItWork() {
  const [images, setImages] = useState([]);
  const [isNewSearch, setIsNewSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleGetRequest(e) {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`;
    const request = await fetch(url);
    const response = await request.json();

    if (!searchTerm) {
      setError("Please, write something");
    } else {
      setImages(response.collection.items);
      setIsNewSearch(true);
      setError(null);
    }

    console.log(response.collection);
  }

  function handleClearButton() {
    setImages([]);
    setIsNewSearch(false);
    setError(null);
    toggleModal();
  }

  const toggleModal = (href, alt, description) => {
    if (showModal) {
      setSelectedImg({ href: "", alt: "", description: "" });
      setShowModal(!showModal);
    } else {
      setSelectedImg({ href, alt, description });
    }
    //setShowModal(!showModal);
  };

  useEffect(() => {
    if (isNewSearch) handleClearButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="img-container">
      <div className="img-form-wrapper">
        <h4 className="search-img-title">Search for an image</h4>

        <div className="img-input-clear-wrap">
          <SearchImg
            handleGetRequest={handleGetRequest}
            setSearchTerm={setSearchTerm}
            images={images}
            error={error}
            handleClearButton={handleClearButton}
            toggleModal={toggleModal}
          />
        </div>
      </div>

      {error !== null ? (
        <div className="error">{error}</div>
      ) : (
        <ImgList
          images={images}
          isNewSearch={isNewSearch}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          toggleModal={toggleModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default MakeItWork;
