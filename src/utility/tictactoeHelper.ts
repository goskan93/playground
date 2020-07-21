export const isWinner = (arr: string[], index: number, size: number, arrLen: number) => {
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
