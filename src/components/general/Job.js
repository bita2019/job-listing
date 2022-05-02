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
        <span>{jobItem.company}</span>
        <span>{jobItem.new && "New!"}</span>
        <span>{jobItem.featured && "Featured"}</span>
      </p>
      <h3>{jobItem.position}</h3>
      <h6>
        <span>{jobItem.postedAt}</span>
        <span>{jobItem.contract}</span>
        <span> {jobItem.location}</span>
      </h6>
      <hr></hr>
      <h5>
        <span onClick={() => addSearchHandler(jobItem.role)}>
          {jobItem.role}
        </span>
        <span onClick={() => addSearchHandler(jobItem.level)}>
          {jobItem.level}
        </span>
        {jobItem.languages.map((lang) => {
          return <span onClick={() => addSearchHandler(lang)}>{lang}</span>;
        })}
        {jobItem.tools.map((tool) => {
          return <span onClick={() => addSearchHandler(tool)}>{tool}</span>;
        })}
      </h5>
    </section>
  );
};

export default Job;
