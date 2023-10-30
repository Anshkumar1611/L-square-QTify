import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";
import SearchResults from "./SearchResults/SearchResults";

const Search = ({ data }) => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleValueChange = (title) => {
    setValue(title);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const getFilteredData = (data, value) => {
    const searchTerm = value.toLowerCase();
    const allData = [...data];
    let updatedData = allData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredData(updatedData);
  };

  useEffect(() => {
    getFilteredData(data, value);
  }, [value, data]);
  return (
    <div className={styles.searchContainer}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          name="name"
          id="name"
          value={value}
          className={styles.search}
          placeholder="Search a album of your choice"
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
      <div className={`${value} ? ${styles.results} : ""`}>
        {value ? (
          <SearchResults
            filteredData={filteredData}
            handleValueChange={handleValueChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
