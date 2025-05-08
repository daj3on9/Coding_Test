const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = new Map();

for (let i = 1; i <= N; i++) {
  const [url, pwd] = input[i].split(" ");
  map.set(url, pwd);
}

const arr = input.slice(N + 1);
arr.forEach((address) => console.log(map.get(address)));
