const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [M, N] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((line) => line.split(" ").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) queue.push([i, j]);
    }
  }

  let front = 0;
  while (front < queue.length) {
    const [x, y] = queue[front++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] !== 0) continue;

      board[nx][ny] = board[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  let max = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        console.log(-1);
        return;
      }
      max = Math.max(max, board[i][j]);
    }
  }

  console.log(max - 1);
});
