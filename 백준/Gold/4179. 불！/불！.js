const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const jQueue = [];
const fQueue = [];

// 지훈이와 불의 시작 위치 찾기
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (maze[i][j] === "J") {
      jQueue.push([i, j, 0]); // x, y, 시간
      maze[i][j] = ".";
    } else if (maze[i][j] === "F") {
      fQueue.push([i, j]);
    }
  }
}

let result = "IMPOSSIBLE";

while (jQueue.length > 0) {
  // 불 먼저 확산
  const fLen = fQueue.length;
  for (let i = 0; i < fLen; i++) {
    const [x, y] = fQueue.shift();
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx >= 0 && nx < r && ny >= 0 && ny < c && maze[nx][ny] === ".") {
        maze[nx][ny] = "F";
        fQueue.push([nx, ny]);
      }
    }
  }

  // 그다음 지훈이 이동
  const jLen = jQueue.length;
  for (let i = 0; i < jLen; i++) {
    const [x, y, time] = jQueue.shift();

    // 탈출 성공
    if (x === 0 || x === r - 1 || y === 0 || y === c - 1) {
      result = time + 1;
      console.log(result);
      process.exit(0);
    }

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx >= 0 && nx < r && ny >= 0 && ny < c && maze[nx][ny] === ".") {
        maze[nx][ny] = "J";
        jQueue.push([nx, ny, time + 1]);
      }
    }
  }
}

console.log(result);
