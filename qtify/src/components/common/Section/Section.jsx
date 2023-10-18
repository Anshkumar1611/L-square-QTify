import React, { useState } from "react";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className={styles.header}>
        <CategoryHeading children={title} />
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}{" "}
        </h4>
      </div>
      {data.length ? (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel  data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Section;
