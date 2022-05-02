import React from "react";
import "../../styles/searchResults.css";
const SearchResults = ({ searchKey }) => {
  return (
    <div className="searchresults_div">
      {searchKey.map((keyClicked) => {
        return <span>{keyClicked}</span>;
      })}
    </div>
  );
};

export default SearchResults;
