// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    const [W, R] = line.split(" ").map(Number);
    const answer = Math.floor(W * (1 + R / 30));
    console.log(answer);
    rl.close();
  });

  rl.on("close", () => {
    process.exit();
  });
})();
