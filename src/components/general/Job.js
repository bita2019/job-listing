import React from "react";
import "../../styles/job.css";
const Job = ({ jobItem, addSearchHandler }) => {
  return (
    <section className="job_section">
      <div className="job_img_div">
        <img
          className="job_img"
          alt={`${jobItem.company} pic`}
          src={jobItem.logo}
        ></img>
      </div>
      <p>
        <span className="allSpans">{jobItem.company}</span>
        <span className="allSpans">{jobItem.new && "New!"}</span>
        <span className="allSpans">{jobItem.featured && "Featured"}</span>
      </p>
      <h3>{jobItem.position}</h3>
      <h6>
        <span className="allSpans">{jobItem.postedAt}</span>
        <span className="allSpans">{jobItem.contract}</span>
        <span className="allSpans"> {jobItem.location}</span>
      </h6>
      <hr></hr>
      <h5>
        <span
          className="allSpans"
          onClick={() => addSearchHandler(jobItem.role)}
        >
          {jobItem.role}
        </span>
        <span
          className="allSpans"
          onClick={() => addSearchHandler(jobItem.level)}
        >
          {jobItem.level}
        </span>
        {jobItem.languages.map((lang, index) => {
          return (
            <span
              className="allSpans"
              key={index}
              onClick={() => addSearchHandler(lang)}
            >
              {lang}
            </span>
          );
        })}
        {jobItem.tools.map((tool, index) => {
          return (
            <span
              className="allSpans"
              key={index}
              onClick={() => addSearchHandler(tool)}
            >
              {tool}
            </span>
          );
        })}
      </h5>
    </section>
  );
};

export default Job;
