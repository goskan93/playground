import React, { useState, useEffect } from "react";
import "./Treasure.css";
import { FaQuestion, FaGem } from "react-icons/fa";
import generateTreasureGrid from "../../utility/treasureGridGenerator";
import Button from "../../components/Button/Button";
const Treasure = () => {
  const [treasureGrid, setTreasureGrid] = useState([]);
  const [guessArray, setGuessArray] = useState(Array(25));
  const [checked, setChecked] = useState([]);
  const [countTurns, setCountTurns] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    generateGrid();
  }, []);

  const generateGrid = () => {
    const grid = generateTreasureGrid();
    setTreasureGrid(grid);
  };
  const onClickBox = (index) => {
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

  const onCheck = () => {
    let updateGuessArray = guessArray;
    checked.forEach((el, ind, arr) => {
      updateGuessArray[el] = treasureGrid[el];
    });
    setChecked([]);
    setGuessArray(updateGuessArray);
    const numberTresuresGuessed = updateGuessArray.reduce((prev, curr) => {
      return curr === 4 ? prev + 1 : prev;
    }, 0);
    if (numberTresuresGuessed === 3) {
      setGameFinished(true);
    } else {
      setCountTurns((prevVal) => prevVal + 1);
    }
  };

  const onResetGame = () => {
    setChecked([]);
    setCountTurns(1);
    setGuessArray(Array(25));
    setGameFinished(false);
    generateGrid();
  };

  return (
    <div className="Treasure-Container">
      <h3 style={{ textAlign: "center", margin: '8px' }}> {gameFinished ? `Game FInished! Youre score ${countTurns}` : `Number of attempts: ${countTurns}`} </h3>
      <h6 style={{ textAlign: "center", margin: 0 }}>Try to find three diamonds. The closer you are from treasures, the bigger the number under the card.</h6>
      <div className="Buttons-Container">
        <Button label="PLAY AGAIN" click={onResetGame} btnClass="BtnLight" />
        <Button label="CHECK" click={onCheck} btnClass="BtnDark" disabled={gameFinished} />
      </div>
      <ul className={gameFinished ? "Treasure-Grid Disabled" : "Treasure-Grid"}>
        {Array(25)
          .fill()
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
