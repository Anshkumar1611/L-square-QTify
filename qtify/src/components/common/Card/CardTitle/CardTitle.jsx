import React from "react";
import styles from "./CardTitle.module.css";
const CardTitle = ({ title }) => {
  return <p className={styles.wrapper}>{title}</p>;
};

export default CardTitle;
