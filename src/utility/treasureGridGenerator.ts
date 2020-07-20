// ExAMPLE const grid = [3, 4, 3, 2, 1, 2, 3, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 2, 3, 2, 3, 4, 3, 2, 1];

export const generateRandom = (max: number): number => {
  return Math.round(Math.random() * max) + 0;
};

const generateTreasureGrid = (): number[] => {
  let grid = new Array(25);
  while (grid.filter(Boolean).length < 3) {
    let index = generateRandom(24);
    if (!grid[index]) {
      grid[index] = 4;
    }
  }

  let j = 4;
  while (j > 1) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === j) {
        if (Math.floor(i / 5) === Math.floor((i - 1) / 5) && !grid[i - 1]) grid[i - 1] = j - 1;
        if (Math.floor(i / 5) === Math.floor((i + 1) / 5) && !grid[i + 1]) grid[i + 1] = j - 1;
        if (i - 5 >= 0 && !grid[i - 5]) grid[i - 5] = j - 1;
        if (i + 5 < 25 && !grid[i + 5]) grid[i + 5] = j - 1;
      }
    }
    j--;
  }
  const gridPlay = Array.from(grid, (item) => item || 1);
  return gridPlay;
};

export default generateTreasureGrid;
