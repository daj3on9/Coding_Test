// 시작 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const [input, ...lines] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.split(" ").map(Number);
const board = lines.map((line) => line.trim().split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const queue = [];
queue.push([0, 0]);
visited[0][0] = true;

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (board[nx][ny] === 0 || visited[nx][ny]) continue;

    visited[nx][ny] = true;
    queue.push([nx, ny]);
    board[nx][ny] = board[x][y] + 1;
  }
}

console.log(board[N - 1][M - 1]);
