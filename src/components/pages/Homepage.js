import React, { useState } from "react";
import Footer from "../general/Footer";
import Header from "../general/Header";
import Jobs from "../general/Jobs";
import allJobs from "../../data/data.json";
const Homepage = () => {
  const [data, setData] = useState(allJobs);
  const [filteredData, setFilteredData] = useState(data);
  const [searchKey, setSearchKey] = useState([]);
  console.log(searchKey);
  const addSearchHandler = (searchItem) => {
    !searchKey.includes(searchItem) && setSearchKey([...searchKey, searchItem]);
  };

  return (
    <>
      <Header></Header>
      <Jobs
        filteredData={filteredData}
        addSearchHandler={addSearchHandler}
        searchKey={searchKey}
      ></Jobs>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
