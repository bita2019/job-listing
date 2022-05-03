import React from "react";
import "../../styles/searchResults.css";
const SearchResults = ({ searchKey, setSearchKey }) => {
  return (
    <div className="searchresults_div">
      {searchKey.map((keyClicked, index) => {
        return (
          <span className="search_span" key={index}>
            {keyClicked}{" "}
            <span
              className="remove_btn"
              onClick={() => {
                setSearchKey(searchKey.filter((item) => item !== keyClicked));
              }}
            >
              {" "}
              X
            </span>{" "}
          </span>
        );
      })}
    </div>
  );
};

export default SearchResults;
