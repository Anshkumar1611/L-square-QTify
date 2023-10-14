import React from "react";
import styles from "./AlbumImage.module.css";

const AlbumImage = ({ image }) => {
  return <img src={image} alt="top_album" className={styles.picture} />;
};

export default AlbumImage;
