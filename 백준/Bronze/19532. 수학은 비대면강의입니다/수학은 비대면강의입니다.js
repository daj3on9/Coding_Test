const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [a, b, c, d, e, f] = input.map(Number);

const denominator = a * e - b * d;
const x = (c * e - b * f) / denominator;
const y = (a * f - c * d) / denominator;

console.log(x.toFixed(0), y.toFixed(0));
