const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const members = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(" ");
  members.push([+age, name]);
}

members.sort((a, b) => a[0] - b[0]);

const answer = members.map((member) => `${member[0]} ${member[1]}`).join("\n");

console.log(answer);
