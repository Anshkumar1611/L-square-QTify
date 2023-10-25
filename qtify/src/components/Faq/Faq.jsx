import React, { useState } from "react";
import Accordion from "../common/Accordion/Accordion";
import styles from "./Faq.module.css";
import { accordionData } from "../../Constant";
const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>FAQs</h1>
      <div className={styles.accordionWrapper}>
        {accordionData?.map((item) => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
