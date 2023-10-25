import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "./Chip/Chip";
import CardTitle from "./CardTitle/CardTitle";
import AlbumImage from "./AlbumImage/AlbumImage";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length}`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.banner}>
                <AlbumImage image={image} />
                <div className={styles.follows}>
                  <Chip children={follows} />
                </div>
              </div>
              <div>
                <CardTitle title={title} />
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.banner}>
              <AlbumImage image={image} />
              <div className={styles.follows}>
                <Chip children={likes} songs />
              </div>
            </div>
            <div>
              <CardTitle title={title} />
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
