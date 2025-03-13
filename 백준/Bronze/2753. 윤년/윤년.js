const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const year = parseInt(input[0], 10);

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) console.log(1);
else console.log(0);
