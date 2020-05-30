import React, { useState } from "react";
import "./Memory.css";
import { FaCat, FaGem, FaAnchor, FaAppleAlt, FaBabyCarriage, FaBalanceScale, FaBomb, FaCannabis } from "react-icons/fa";

const Memory = () => {
  const [gameFinished, setGameFinished] = useState(false);
  const [guessArray, setGuessArray] = useState(Array(16).fill(false));
  const [checked, setChecked] = useState([]);
  const onClickBox = () => {};
  const onResetGame = () => {};

  return (
    <div className="Treasure-Container">
      <button onClick={onResetGame}>Play again</button>

      <ul className={gameFinished ? "Memory-Grid Disabled" : "Memory-Grid"}>
        {Array(16)
          .fill()
          .map((_, index) => {
            let className = checked.includes(index) || guessArray[index] ? "Open" : "";
            return <li onClick={() => onClickBox(index)} key={index} className={className}></li>;
          })}
      </ul>
    </div>
  );
};

export default Memory;
