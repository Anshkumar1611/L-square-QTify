import React from "react";
import styles from "./Chip.module.css";
const Chip = ({ children, songs }) => {
  return (
    <div className={styles.chip}>
      {children} {songs ? "Likes" : "Follows"}
    </div>
  );
};

export default Chip;
