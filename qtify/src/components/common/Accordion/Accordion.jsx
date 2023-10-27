import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { ReactComponent as AccordionIcon } from "../../../assets/accordionIcon.svg";
const Accordion = ({ item }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className={styles.wrapper}>
      <div key={item.index} className={styles.accordionContainer}>
        <div className={styles.accordionWrapper} onClick={toggleAccordion}>
          <p className={`${styles.title} `}>{item.title}</p>
          <AccordionIcon
            className={`${styles.icon} ${styles.arrow} ${
              isAccordionOpen ? `${styles.open}` : ""
            }`}
          />
        </div>
        {isAccordionOpen && (
          <div
            className={`${styles.description} ${styles.accordionContentWrapper}`}
          >
            {item.description}
          </div>
        )}
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Accordion;
