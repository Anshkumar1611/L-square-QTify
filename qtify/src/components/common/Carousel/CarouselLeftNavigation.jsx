import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftNavigation.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  console.log(swiper);
  const [isBeginning, setIsBeginning] = useState(Swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
