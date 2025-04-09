const solution = (N, data, K) => {
  let ans = Infinity;

  const dfs = (number) => {
    if (number > K) {
      ans = Math.min(number, ans);
      return;
    }

    for (let i = 0; i < N; i++) {
      const next = number * 10 + data[i];
      if (next === 0) continue;
      dfs(next);
    }
  };

  dfs(0);
  console.log(ans);
};

const readline = require("readline");
let N = null;
let count = 0;
let data = null;
let K = null;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      if (count == 0) {
        data = line.split(" ").map((el) => +el);
      } else {
        K = !K ? +line : null;
      }
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(N, data, K);
  process.exit();
})();
