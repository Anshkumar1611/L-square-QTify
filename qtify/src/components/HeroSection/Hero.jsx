import React from "react";
import Headphone from "../../assets/headphone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heading}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={Headphone} alt="headphone" />
      </div>
    </div>
  );
};

export default Hero;
