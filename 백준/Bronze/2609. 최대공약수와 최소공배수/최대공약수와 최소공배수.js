const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; // 슬래시 꼭!!!
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let [a, b] = input;

let x = a;
let y = b;

// 유클리드 호제법으로 GCD
while (y !== 0) {
  let temp = y;
  y = x % y;
  x = temp;
}

const gcd = x;
const lcm = (a * b) / gcd;

console.log(gcd);
console.log(lcm);
