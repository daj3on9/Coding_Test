const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let answer = 0;
for (let i of input) {
  answer += parseInt(i);
}

console.log(answer);
