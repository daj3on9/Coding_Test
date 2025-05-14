const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const members = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(" ");
  members.push({ age: +age, name: name });
}

members.sort((a, b) => a.age - b.age);

members.forEach((member) => console.log(`${member.age} ${member.name}`));
