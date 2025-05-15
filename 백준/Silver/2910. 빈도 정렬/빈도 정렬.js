const fs = require("fs");
const { clearScreenDown } = require("readline");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const message = input[1].split(" ");
const countMap = new Map();
const result = [];

message.forEach((num) => {
  countMap.set(num, (countMap.get(num) || 0) + 1);
});

[...countMap.entries()]
  .sort((a, b) => b[1] - a[1])
  .forEach(([num, count]) => {
    for (let i = 0; i < count; i++) {
      result.push(num);
    }
  });

console.log(result.join(" "));
