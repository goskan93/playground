import React, { useState, useEffect, FunctionComponent } from "react";
import "./Treasure.css";
import { FaQuestion, FaGem } from "react-icons/fa";
import generateTreasureGrid from "../../utility/treasureGridGenerator";
import Button from "../../components/Button/Button";

const Treasure: FunctionComponent = () => {
  const [treasureGrid, setTreasureGrid] = useState<number[]>([]);
  const [guessArray, setGuessArray] = useState<number[]>(Array(25));
  const [checked, setChecked] = useState<number[]>([]);
  const [countTurns, setCountTurns] = useState<number>(1);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  useEffect(() => {
    generateGrid();
  }, []);

  const generateGrid = (): void => {
    const grid = generateTreasureGrid();
    setTreasureGrid(grid);
  };

  const onClickBox = (index: number): void => {
    if (!gameFinished) {
      if (!guessArray[index]) {
        if (checked.includes(index)) {
          //uncheck
          const unchecked = checked.filter((x) => x !== index);
          setChecked(unchecked);
        } else {
          checked.length < 3 && setChecked((prevChecked) => [...prevChecked, index]);
        }
      }
    }
  };

  const onCheck = (): void => {
    let updateGuessArray = guessArray;
    checked.forEach((el: number, ind, arr) => {
      updateGuessArray[el] = treasureGrid[el];
    });
    setChecked([]);
    setGuessArray(updateGuessArray);
    const numberTresuresGuessed: number = updateGuessArray.reduce((prev, curr) => {
      return curr === 4 ? prev + 1 : prev;
    }, 0);
    if (numberTresuresGuessed === 3) {
      setGameFinished(true);
    } else {
      setCountTurns((prevVal) => prevVal + 1);
    }
  };

  const onResetGame = (): void => {
    setChecked([]);
    setCountTurns(1);
    setGuessArray(Array(25));
    setGameFinished(false);
    generateGrid();
  };

  return (
    <div className="Treasure-Container">
      <h3 style={{ textAlign: "center" }}> {gameFinished ? `Game FInished! Youre score ${countTurns}` : `No. of turn: ${countTurns}`} </h3>
      <div className="Buttons-Container">
        <Button label="PLAY AGAIN" click={onResetGame} btnClass="BtnLight" />
        <Button label="CHECK" click={onCheck} btnClass="BtnDark" disabled={gameFinished} />
      </div>
      <ul className={gameFinished ? "Treasure-Grid Disabled" : "Treasure-Grid"}>
        {Array(25)
          .fill(null)
          .map((_, index) => {
            let className = checked.includes(index) ? "Guess" : guessArray[index] ? "Guessed" : "";
            return (
              <li onClick={() => onClickBox(index)} key={index} className={className}>
                {checked.includes(index) ? <FaQuestion /> : guessArray[index] === 4 ? <FaGem /> : <span>{guessArray[index]}</span>}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Treasure;
