import React, { useEffect, useState } from "react";
import ImageVideoModal from "../pages/ImageVideoModal";

function ImgList({
  isNewSearch,
  images,
  selectedImg,
  toggleModal,
  showModal,
  setShowModal,
}) {
  const [shuffledImages, setShuffledImages] = useState(null);

  function getShuffledImages(toggleModal) {
    function shuffleArray(array) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    return shuffleArray(images)
      .slice(0, 30)
      .map(image => {
        return (
          <div className="image-fit-container" key={image.data[0].nasa_id}>
            <div className="img-card">
              <img
                className="image"
                src={image.links[0].href}
                alt={image.data[0].title}
              />
              <button
                className="img-view-btn"
                onClick={() => {
                  toggleModal(
                    image.links[0].href,
                    image.data[0].title,
                    image.data[0].description
                  );
                  setShowModal(true);
                }}
              >
                View
              </button>
            </div>
          </div>
        );
      });
  }

  useEffect(() => {
    setShuffledImages(getShuffledImages(toggleModal));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewSearch]);

  //console.log(images[0].links[0].href);
  //console.log(images[0].data[0].description);

  return (
    <div className="image-grid">
      {showModal && (
        <ImageVideoModal
          images={images}
          toggleModal={toggleModal}
          selectedImg={selectedImg}
        />
      )}
      {shuffledImages}
    </div>
  );
}

export default ImgList;
