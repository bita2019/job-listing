import React from "react";
import Job from "./Job";

import "../../styles/jobs.css";
import SearchResults from "./SearchResults";
const Jobs = ({ filteredData, addSearchHandler, searchKey, setSearchKey }) => {
  return (
    <article className="jobs_cont">
      {searchKey.length !== 0 && (
        <SearchResults
          searchKey={searchKey}
          setSearchKey={setSearchKey}
        ></SearchResults>
      )}

      <div className="jobs_parent">
        {filteredData.map((jobItem, index) => {
          return (
            <Job
              key={index}
              jobItem={jobItem}
              addSearchHandler={addSearchHandler}
            ></Job>
          );
        })}
      </div>
    </article>
  );
};

export default Jobs;
