const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const [input, ...lines] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.split(" ").map(Number);
const board = lines.map((line) => line.trim().split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let num = 0; // 그림 수
let mx = 0; // 가장 넓은 그림의 넓이

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0 || visited[i][j]) continue;

    num++;

    let area = 0;

    const queue = [];
    queue.push([i, j]);
    visited[i][j] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      area++;

      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (visited[nx][ny] || board[nx][ny] === 0) continue;

        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }

    mx = Math.max(mx, area);
  }
}

console.log(num);
console.log(mx);
