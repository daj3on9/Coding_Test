const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const set = new Set();

for (let i = 1; i <= N; i++) {
  const [name, state] = input[i].split(" ");
  if (state === "enter") set.add(name);
  if (state === "leave") set.delete(name);
}

let answer = [...set].sort();
answer.reverse();
for (let i of answer) {
  console.log(i);
}
