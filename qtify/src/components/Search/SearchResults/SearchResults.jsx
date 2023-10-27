import React from "react";
import styles from "./SearchResults.module.css";
const SearchResults = ({ filteredData, handleValueChange }) => {
  return (
    <>
      {filteredData?.map((item) => (
        <div
          className={styles.wrapper}
          key={item.id}
          onClick={() => handleValueChange(item.title)}
        >
          <div className={styles.details}>
            <img
              src={item.image}
              alt="album_image"
              className={styles.albumImage}
            />
            <div>
              <p>{item.title}</p>
            </div>
          </div>
          <div className={styles.follows}>
            {item.follows || item.likes} Follows
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
