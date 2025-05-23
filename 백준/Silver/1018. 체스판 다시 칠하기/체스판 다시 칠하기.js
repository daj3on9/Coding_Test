const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [first, ...lines] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = first.split(" ").map(Number);
const board = lines.map(line => line.trim());

const repaintCount = (startRow, startCol, startColor) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const current = board[startRow + i][startCol + j];
      const expected = (i + j) % 2 === 0 ? startColor : (startColor === 'W' ? 'B' : 'W');
      if (current !== expected) count++;
    }
  }
  return count;
};

let min = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const whiteStart = repaintCount(i, j, 'W');
    const blackStart = repaintCount(i, j, 'B');
    min = Math.min(min, whiteStart, blackStart);
  }
}

console.log(min);
