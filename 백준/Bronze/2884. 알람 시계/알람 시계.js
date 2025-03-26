const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; // 슬래시 꼭!!!
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [h, m] = input;

if (m < 45) {
  if (h === 0) {
    console.log(h + 23, 60 - 45 + m);
  } else {
    console.log(h - 1, 60 - 45 + m);
  }
} else {
  console.log(h, m - 45);
}
