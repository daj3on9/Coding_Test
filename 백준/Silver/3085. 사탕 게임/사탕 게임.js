const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const board = input.slice(1).map((line) => line.split(""));

let max = 0;

function check(board) {
  let result = 1;

  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 1; j < N; j++) {
      if (board[i][j] === board[i][j - 1]) {
        count++;
        result = Math.max(result, count);
      } else {
        count = 1;
      }
    }
  }

  for (let j = 0; j < N; j++) {
    let count = 1;
    for (let i = 1; i < N; i++) {
      if (board[i][j] === board[i - 1][j]) {
        count++;
        result = Math.max(result, count);
      } else {
        count = 1;
      }
    }
  }

  return result;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j + 1 < N) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      max = Math.max(max, check(board));
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
    }

    if (i + 1 < N) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      max = Math.max(max, check(board));
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
    }
  }
}

console.log(max);
