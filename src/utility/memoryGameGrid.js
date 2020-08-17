import { FaCat, FaGem, FaAnchor, FaAppleAlt, FaBabyCarriage, FaBalanceScale, FaBomb, FaCannabis } from "react-icons/fa";
import { generateRandom } from "./treasureGridGenerator";

export const generateMemoryGrid = () => {
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
  return gameGrid;
};
