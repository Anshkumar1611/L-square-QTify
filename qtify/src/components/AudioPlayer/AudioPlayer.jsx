import React from "react";
import styles from "./AudioPlayer.module.css";
import { ReactComponent as CurrentSong } from "../../assets/currentSong.svg";
import { ReactComponent as PlayButton } from "../../assets/playButton.svg";
import { ReactComponent as ProgressBar } from "../../assets/progressBar.svg";
const AudioPlayer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.songWrapper}>
        <CurrentSong />
        <div>
          <p>Song name</p>
          <p className={styles.songDescription}>Album name </p>
        </div>
      </div>
      <div className={styles.indicatorWrapper}>
        <PlayButton className={styles.playButton} />
        <div className={styles.progressBar}>
          <span>0:38</span>
          <ProgressBar />
          <span>3:38</span>
        </div>
      </div>
      <div className={styles.end}></div>
    </div>
  );
};

export default AudioPlayer;
