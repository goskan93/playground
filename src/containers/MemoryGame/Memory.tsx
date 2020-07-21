import React, { useState, useEffect } from "react";
import "./Memory.css";
import Button from "../../components/Button/Button";
import { setNewGame, gameGridType } from "../../utility/memoryGameHelper";

const Memory = () => {
  const [gameGrid, setGameGrid] = useState<gameGridType>({});
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [guessArray, setGuessArray] = useState<boolean[]>(Array(16).fill(false));
  const [checked, setChecked] = useState<number[]>([]);
  const [countScore, setScore] = useState<number>(0);

  useEffect(() => {
    onSetGame();
  }, []);

  const onSetGame = (): void => {
    let gameGrid = setNewGame();
    setGameGrid(gameGrid);
  };

  const onClickBox = (index: number): void => {
    const updateChecked = [...checked, index];
    setChecked(updateChecked);
    if (updateChecked.length === 2) {
      setScore((prevScore) => prevScore + 1);
      setTimeout(() => {
        if (gameGrid[updateChecked[0]] === gameGrid[updateChecked[1]]) {
          let updatedGuesArray = guessArray;
          updatedGuesArray[updateChecked[0]] = true;
          updatedGuesArray[updateChecked[1]] = true;
          setGuessArray(updatedGuesArray);
          if (updatedGuesArray.filter((x) => !x).length === 0) {
            setGameFinished(true);
          }
        }
        setChecked([]);
      }, 500);
    }
  };
  const onResetGame = (): void => {
    setGameFinished(false);
    onSetGame();
    setGuessArray(Array(16).fill(false));
    setChecked([]);
    setScore(0);
  };

  return (
    <div className="Treasure-Container">
      <h3 style={{ textAlign: "center" }}>
        {gameFinished ? `Game Finished! Your score: ${countScore}` : `Number of tries: ${countScore}`}
      </h3>
      <div className="Buttons-Container">
        <Button label="PLAY AGAIN" click={onResetGame} btnClass="BtnLight" />
      </div>
      <ul className="Memory-Grid">
        {Array(16)
          .fill(null)
          .map((_, index) => {
            let className = checked.includes(index) || guessArray[index] ? "Open" : "";
            let Icon = gameGrid[index];
            return (
              <li onClick={() => onClickBox(index)} key={index} className={className}>
                {className && <Icon size="3rem" />}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Memory;
