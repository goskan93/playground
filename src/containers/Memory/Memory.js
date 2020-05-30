import React, { useState, useEffect } from "react";
import "./Memory.css";
import { FaCat, FaGem, FaAnchor, FaAppleAlt, FaBabyCarriage, FaBalanceScale, FaBomb, FaCannabis } from "react-icons/fa";
import { generateRandom } from "../../utility/treasureGridGenerator";

const Memory = () => {
  const [gameGrid, setGameGrid] = useState({});
  const [gameFinished, setGameFinished] = useState(false);
  const [guessArray, setGuessArray] = useState(Array(16).fill(false));
  const [checked, setChecked] = useState([]);
  const [countScore, setScore] = useState(0);

  useEffect(() => {
    onSetGame();
  }, []);

  const onSetGame = () => {
    let gameGrid = {};
    const icons = [FaCat, FaGem, FaAnchor, FaAppleAlt, FaBabyCarriage, FaBalanceScale, FaBomb, FaCannabis];
    icons.forEach((Icon) => {
      let i = 0;
      while (i < 2) {
        let index = generateRandom(15);
        if (!gameGrid[index]) {
          gameGrid[index] = Icon;
          i++;
        }
      }
    });
    console.log(gameGrid);
    setGameGrid(gameGrid);
  };

  const onClickBox = (index) => {
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
  const onResetGame = () => {
    setGameFinished(false);
    onSetGame();
    setGuessArray(Array(16).fill(false));
    setChecked([]);
  };

  return (
    <div className="Treasure-Container">
      <button onClick={onResetGame}>Play again</button>
      {gameFinished && <span>You finished! Your score: {countScore}</span>}
      <ul className="Memory-Grid">
        {Array(16)
          .fill()
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
