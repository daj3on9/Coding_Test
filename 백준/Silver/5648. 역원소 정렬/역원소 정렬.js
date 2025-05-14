const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(String);

const elements = input.slice(1);

const reverse_elements = elements.map((element) =>
  Number(element.split("").reverse().join(""))
);

reverse_elements.sort((a, b) => a - b);

for (let i of reverse_elements) {
  console.log(i);
}
