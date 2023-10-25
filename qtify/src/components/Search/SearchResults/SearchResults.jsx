import React from "react";
import styles from "./SearchResults.module.css";
const SearchResults = ({ filteredData }) => {
  return (
    <>
      {filteredData?.map((item) => (
        <div className={styles.wrapper} key={item.id}>
          <div className={styles.details}>
            <img
              src={item.image}
              alt="album_image"
              className={styles.album_image}
            />
            <div>
              <p>{item.slug}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
          <div>{item.follows || item.likes}</div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
