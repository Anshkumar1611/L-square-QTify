import React from "react";
import styles from "./Chip.module.css";
const Chip = ({ follows }) => {
  return <div className={styles.chip}>{follows} Follows</div>;
};

export default Chip;
