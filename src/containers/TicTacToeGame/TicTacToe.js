import React, { useState } from "react";
import "./TicTacToe.css";
import { FaCircleNotch, FaTimes } from "react-icons/fa";

const playerIcons = {
  Player1: FaCircleNotch,
  Player2: FaTimes,
};

const Grid = (props) => {
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    !props.gameFinished && setHover(true);
  };

  const onMouseOut = () => {
    !props.gameFinished && setHover(false);
  };

  const Icon = props.class ? playerIcons[props.class] : null;
  const IconHover = playerIcons[props.player];

  return (
    <li className={props.class} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut} onClick={props.click}>
      {Icon ? <Icon size={`${10 / props.size}rem`} color="#fff" /> : hover && <IconHover size={`${9 / props.size}rem`} color="#ccc" />}
    </li>
  );
};

const TicTacToe = () => {
  const [size, setSize] = useState(3);
  const arrLen = size ** 2;

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playAray, setPlayArray] = useState(Array(arrLen));
  const [finished, setFinished] = useState(false);
  const [text, setText] = useState("");

  const isWinner = (arr, index) => {
    const col = index % size;
    const row = Math.floor(index / size);

    let sumRow = 0;
    for (let i = row * size; i < row * size + size; i++) {
      sumRow += arr[i] ? (arr[i] === "Player1" ? 1 : -1) : 0;
    }

    if (sumRow === size || sumRow === -size) {
      return true;
    }

    let sumCol = 0;
    for (let i = col; i < arrLen; i = i + size) {
      sumCol += arr[i] ? (arr[i] === "Player1" ? 1 : -1) : 0;
    }
    if (sumCol === size || sumCol === -size) {
      return true;
    }

    if (col === row || (col === 0 && row === size - 1) || (row === 0 && col === size - 1)) {
      let diagL = 0;
      for (let i = 0; i < arrLen; i = i + size + 1) {
        diagL += arr[i] ? (arr[i] === "Player1" ? 1 : -1) : 0;
      }
      if (diagL === size || diagL === -size) {
        return true;
      }
      let diagR = 0;
      for (let i = size - 1; i < arrLen - 1; i = i + size - 1) {
        diagR += arr[i] ? (arr[i] === "Player1" ? 1 : -1) : 0;
      }
      if (diagR === size || diagR === -size) {
        return true;
      }
    }

    return false;
  };

  const onClick = (index) => {
    if (!finished) {
      let updatedArray = playAray;
      if (!updatedArray[index]) {
        updatedArray[index] = `Player${currentPlayer}`;
        const isWinnerFla = isWinner(updatedArray, index);
        if (isWinnerFla) {
          setFinished(true);
          setText(`Game Over! Player ${currentPlayer} won`);
        } else {
          if (updatedArray.filter(Boolean).length < arrLen) {
            setPlayArray(updatedArray);
            setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
          } else {
            setFinished(true);
            setText(`Game Over! Nobody won :(`);
          }
        }
      }
    }
  };
  const onResetGame = () => {
    setCurrentPlayer(1);
    setPlayArray(Array(arrLen));
    setFinished(false);
    setText("");
  };

  const onChangeGridSize = (event) => {
    setSize(+event.target.value);
    onResetGame();
  };

  return (
    <div className="TTT-Container">
      <p style={{ textAlign: "center" }}>{text ? text : `Player ${currentPlayer}`}</p>
      <div>
        <label>
          <input type="radio" value="3" id="3" checked={size === 3} onChange={onChangeGridSize} />3
        </label>
        <label for="5">
          <input type="radio" value="5" id="5" checked={size === 5} onChange={onChangeGridSize} />5
        </label>
        <label for="7">
          <input type="radio" value="7" id="7" checked={size === 7} onChange={onChangeGridSize} />7
        </label>
      </div>
      <ul
        className={finished ? "TTT-Grid Disabled" : "TTT-Grid"}
        style={{ gridTemplateColumns: "1fr ".repeat(size), gridTemplateRows: "1fr ".repeat(size) }}
      >
        {Array(arrLen)
          .fill()
          .map((_, index) => (
            <Grid
              key={index}
              player={`Player${currentPlayer}`}
              click={() => onClick(index)}
              class={playAray[index]}
              gameFinished={finished}
              size={size}
            />
          ))}
      </ul>
      <button onClick={onResetGame}>Start again</button>
    </div>
  );
};

export default TicTacToe;
