const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1, N + 1);
const map = new Map();

arr.forEach((name, idx) => {
  map.set(name, idx + 1);
});

const pocketmons = input.slice(N + 1);
const result = [];

for (const p of pocketmons) {
  if (isNaN(p)) result.push(map.get(p));
  else result.push(arr[Number(p) - 1]);
}

console.log(result.join("\n"));
