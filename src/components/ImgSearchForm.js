import React from "react";
import { BsSearch } from "react-icons/bs";

function ImgSearchForm({
  handleGetRequest,
  setSearchTerm,
  images,
  error,
  handleClearButton,
}) {
  return (
    <form onSubmit={handleGetRequest} className="img-search-wrapper">
      <div className="clear-search-glass">
        {images.length > 0 && error === null ? (
          <div>
            <button onClick={handleClearButton} className="clear-btn">
              Clear
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <input
          className="img-search-input"
          type="search"
          autoComplete="off"
          name="searchValue"
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="img-search-btn">
          {<BsSearch />}
        </button>
      </div>
    </form>
  );
}

export default ImgSearchForm;
