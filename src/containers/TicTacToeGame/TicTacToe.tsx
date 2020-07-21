import React, { useState, FunctionComponent } from "react";
import "./TicTacToe.css";
import { FaCircleNotch, FaTimes } from "react-icons/fa";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import { isWinner } from "../../utility/tictactoeHelper";
const playerIcons = {
  Player1: FaCircleNotch,
  Player2: FaTimes,
};

type GridProps = {
  gameFinished: boolean;
  class: string;
  player: string;
  size: number;
  click: () => void;
};

const Grid: FunctionComponent<GridProps> = (props) => {
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

const TicTacToe: FunctionComponent = () => {
  const [size, setSize] = useState<number>(3);
  const arrLen: number = size ** 2;

  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [playAray, setPlayArray] = useState<string[]>(Array(arrLen));
  const [finished, setFinished] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const onClick = (index: number): void => {
    if (!finished) {
      let updatedArray = playAray;
      if (!updatedArray[index]) {
        updatedArray[index] = `Player${currentPlayer}`;
        const isWinnerFla = isWinner(updatedArray, index, size, arrLen);
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

  const onChangeGridSize = (event: React.FormEvent<HTMLInputElement>): void => {
    setSize(+event.currentTarget.value);
    onResetGame();
  };

  return (
    <div className="TTT-Container">
      <h3 style={{ textAlign: "center" }}>{text ? text : `Player ${currentPlayer}`}</h3>
      <div className="RadioButtons-Container">
        {[3, 5, 7].map((el) => (
          <RadioButton label={el.toString()} value={el} checked={size === el} onChange={onChangeGridSize} />
        ))}
      </div>
      <div className="Buttons-Container">
        <Button label="PLAY AGAIN" click={onResetGame} btnClass="BtnLight" />
      </div>
      <ul
        className={finished ? "TTT-Grid Disabled" : "TTT-Grid"}
        style={{ gridTemplateColumns: "1fr ".repeat(size), gridTemplateRows: "1fr ".repeat(size) }}
      >
        {Array(arrLen)
          .fill(null)
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
    </div>
  );
};

export default TicTacToe;
