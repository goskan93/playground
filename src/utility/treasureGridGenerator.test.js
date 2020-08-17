import generateTreasureGrid, { generateRandom } from "./treasureGridGenerator";

describe("FUN generateRandom", () => {
  it.each([2, 40, 5, 3, 9])("generate int value between zero and %i", (max_num) => {
    const value = generateRandom(max_num);
    expect(value).toEqual(expect.any(Number));
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(max_num);
  });
});

describe("FUN generateTreasureGrid", () => {
  it("generate grid correctly", () => {
    const grid = generateTreasureGrid();
    expect(grid.length).toBe(25);
  });
});
