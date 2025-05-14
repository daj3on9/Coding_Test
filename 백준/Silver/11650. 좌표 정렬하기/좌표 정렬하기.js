const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const graph = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph.push([x, y]);
}

graph.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

graph.forEach((coordinate) => console.log(`${coordinate[0]} ${coordinate[1]}`));
