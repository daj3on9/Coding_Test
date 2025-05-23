const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input;
let answer = 0;

for (let i = N - 9 * String(N).length; i < N; i++) {
  const sum =
    i +
    String(i)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  if (sum === N) {
    answer = i;
    break;
  }
}

console.log(answer);
