const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let maxSum = 0;

function dfs(start, count, total) {
  if (total > M) return;
  if (count === 3) {
    maxSum = Math.max(maxSum, total);
    return;
  }

  for (let i = start; i < N; i++) {
    dfs(i + 1, count + 1, total + cards[i]);
  }
}

dfs(0, 0, 0);

console.log(maxSum);
