const solution = (data) => {
  for (let num of data) {
    let state = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) state = 0;
    }
    console.log(state ? "Yes" : "No");
  }
};
const readline = require("readline");
let N = null;
let count = 0;
const data = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      data.push(+line);
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(data);
  process.exit();
})();
