const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const inputs = [];
let answer = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line);
  } else {
    inputs.push(line);
    if (inputs.length === n) {
      inputs.forEach((expr) => {
        const [a, op, b] = expr.split(" ");
        const num1 = Number(a);
        const num2 = Number(b);

        switch (op) {
          case "+":
            answer += num1 + num2;
            break;
          case "-":
            answer += num1 - num2;
            break;
          case "*":
            answer += num1 * num2;
            break;
          case "/":
            answer += Math.floor(num1 / num2);
            break;
        }
      });

      console.log(answer);
      rl.close();
    }
  }
});

rl.on("close", () => process.exit());
