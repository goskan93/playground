import { FaCat, FaGem, FaAnchor, FaAppleAlt, FaBabyCarriage, FaBalanceScale, FaBomb, FaCannabis } from "react-icons/fa";
import { generateRandom } from "./treasureGridGenerator";
import { IconType } from "react-icons/lib";

export type gameGridType = {
  [id: number]: IconType;
};

export const setNewGame = (): gameGridType => {
  let gameGrid: gameGridType = {};
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
  return gameGrid;
};
