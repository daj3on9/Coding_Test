// 시작 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const words = new Set();

for (let i = 1; i <= N; i++) {
  words.add(input[i]);
}

const sort_words = [...words].sort(
  (a, b) => a.length - b.length || a.localeCompare(b)
);

sort_words.forEach((word) => console.log(word));
