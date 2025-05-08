const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = Number(input[0]);
let num = 1;

for (let i = 0; i < tc; i++) {
  const n = Number(input[num++]);
  const map = new Map();

  for (let j = 0; j < n; j++) {
    const [name, type] = input[num++].split(" ");
    map.set(type, (map.get(type) || 0) + 1);
  }

  const result = [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;

  console.log(result);
}
