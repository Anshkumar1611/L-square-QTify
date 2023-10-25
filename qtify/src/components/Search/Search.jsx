import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";
import SearchResults from "./SearchResults/SearchResults";

const Search = ({ data }) => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const onSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };

  const getFilteredData = (data, value) => {
    const allData = [...data];
    let updatedData = allData.filter((item) => item.title.includes(value));
    setFilteredData(updatedData);
  };

  useEffect(() => {
    getFilteredData(data, value);
  }, [value, data]);
  return (
    <div className={styles.searchContainer}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          placeholder="Search a album of your choice"
          onChange={handleChange}
        />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
      <div className={value ? styles.results : ""}>
        {value ? <SearchResults filteredData={filteredData} /> : null}
      </div>
    </div>
  );
};

export default Search;
