import React from "react";
import Job from "./Job";

import "../../styles/jobs.css";
import SearchResults from "./SearchResults";
const Jobs = ({ filteredData, addSearchHandler, searchKey }) => {
  return (
    <article className="jobs_cont">
      <SearchResults searchKey={searchKey}></SearchResults>
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
