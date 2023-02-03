import { useState, useEffect } from "react";

import Minimax from "ttt-minimax-typescript";
import Board from "tictactoe-board";

import Button from "../Button/Button";

import styles from "./GameBoard.module.scss";
import audioSrc from "../../assets/audio/retro-game-click-sound.mp3"

export default function GameBoard(props) {
  const [gameBoard, setGameBoard] = useState(new Board());
  const [currentPLayer, setCurrentPLayer] = useState();
  const [isMoving, setIsMoving] = useState(false);

  const minimax = new Minimax("X", "O");
  const audio = new Audio(audioSrc);

  useEffect(() => {
    setCurrentPLayer(gameBoard.currentMark());
  }, []);

  const newGameHandler = () => {
    setGameBoard(new Board());
    props.setAIScore(0);
    props.setTieScore(0);
    props.setCurrentPLayerScore(0);
  };

  const gameOverHandler = (board) => {
    if (board.hasWinner() && board.winningPlayer() === "X") {
      props.setCurrentPLayerScore(props.currentPLayerScore + 1);
    } else if (board.hasWinner() && board.winningPlayer() === "O") {
      props.setAIScore(props.AIScore + 1);
    } else {
      props.setTieScore(props.tieScore + 1);
    }

    setTimeout(() => {
      setGameBoard(new Board());
      setIsMoving(false);
    }, 300);
  };

  const clickHandler = (i) => {
    if (gameBoard.isPositionTaken(i) || isMoving) {
      return;
    } else {
      audio.play();
    }

    setIsMoving(true);

    let updatedGameBoard = gameBoard.makeMove(i, currentPLayer);

    setGameBoard(updatedGameBoard);

    if (updatedGameBoard.isGameOver()) {
      gameOverHandler(updatedGameBoard);
      return;
    }

    setTimeout(() => {
      let bestIndex = minimax.findBestMove(updatedGameBoard);
      updatedGameBoard = updatedGameBoard.makeMove(
        bestIndex,
        updatedGameBoard.currentMark()
      );

      setGameBoard(updatedGameBoard);
      setIsMoving(false);

      if (updatedGameBoard.isGameOver()) {
        gameOverHandler(updatedGameBoard);
        return;
      }
    }, 300);
  };

  return (
    <>
      <div className={styles.gameboard}>
        {gameBoard.grid.map((panel, i) => {
          return (
            <button
              onClick={() => clickHandler(i + 1)}
              key={i}
              className={styles.gameboard__panel}
            >
              <span className={styles.gameboard__panel__char}>{panel}</span>
            </button>
          );
        })}
      </div>
      <div className={styles.gameboard__action}>
        <Button onClick={newGameHandler}>New Game</Button>
      </div>
    </>
  );
}
