import React, { useState, useEffect } from "react";
import Footer from "../general/Footer";
import Header from "../general/Header";
import Jobs from "../general/Jobs";
import allJobs from "../../data/data.json";
const Homepage = () => {
  const [data, setData] = useState(allJobs);
  const [filteredData, setFilteredData] = useState(data);
  const [searchKey, setSearchKey] = useState([]);

  const addSearchHandler = (searchItem) => {
    !searchKey.includes(searchItem) && setSearchKey([...searchKey, searchItem]);
  };

  const filterHandler = () => {
    console.log("handler is working");
    let arr = data;

    arr = arr.filter((job) => {
      let lamp = true;
      for (let item of searchKey) {
        if (
          !job.role.includes(item) &&
          !job.level.includes(item) &&
          !job.languages.includes(item) &&
          !job.tools.includes(item)
        ) {
          lamp = false;
        }
      }

      return lamp && job;
    });
    console.log(arr);
    setFilteredData(arr);
  };

  useEffect(() => {
    filterHandler();
  }, [searchKey]);

  return (
    <>
      <Header></Header>
      <Jobs
        filteredData={filteredData}
        addSearchHandler={addSearchHandler}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      ></Jobs>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
