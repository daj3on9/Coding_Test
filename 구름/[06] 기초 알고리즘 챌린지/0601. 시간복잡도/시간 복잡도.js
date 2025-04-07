// Run by Node.js
const solution = (N) => {
  let cnt = 0;
  while (N) {
    N = Math.floor(N / 5);
    cnt += N;
  }
  console.log(cnt);
};
const readline = require("readline");
let N = null;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    rl.close();
  }
  solution(N);
  process.exit();
})();
