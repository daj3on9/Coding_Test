const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const grade = parseInt(input[0], 10);

if (grade >= 90 && grade <= 100) console.log("A");
else if (grade >= 80 && grade < 90) console.log("B");
else if (grade >= 70 && grade < 80) console.log("C");
else if (grade >=60 && grade < 70) console.log("D");
else console.log("F");
