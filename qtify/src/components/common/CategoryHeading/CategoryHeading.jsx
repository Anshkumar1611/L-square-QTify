import React from "react";
import styles from "./Category.module.css";

const CategoryHeading = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default CategoryHeading;
