import { useState, useEffect } from "react";

import styles from "./ScoreBoard.module.scss";

export default function ScoreBoard(props) {
  const data = props;
  
  return (
    <>
      <div className={styles["score-board"]}>
        <div className={styles.players}>
          <div className={styles.players__name}>Player (X)</div>
          <div className={styles.players__score}>{data.currentPLayerScore}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.players__name}>Tie</div>
          <div className={styles.players__score}>{data.tieScore}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.players__name}>AI (O)</div>
          <div className={styles.players__score}>{data.AIScore}</div>
        </div>
      </div>
    </>
  );
}
