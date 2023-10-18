import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";
import styles from "./Carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightNavigation.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  console.log(swiper);
  const [isEnd, setIsEnd] = useState(Swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd, swiper, swiper.isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
