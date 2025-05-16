const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const indexed = A.map((value, idx) => [value, idx]);

indexed.sort((a, b) => a[0] - b[0]);

const P = Array(N);

indexed.forEach(([_, originalIdx], sortedIdx) => {
  P[originalIdx] = sortedIdx;
});

console.log(P.join(" "));