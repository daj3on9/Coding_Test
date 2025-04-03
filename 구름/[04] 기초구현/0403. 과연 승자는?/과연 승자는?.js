const solution = (N, data) => {
  const arr1 = data[0];
  const arr2 = data[1];

  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < N; i++) {
    const cal = arr1[i] - arr2[i];
    if (cal === 0) {
      score1 += 1;
      score2 += 1;
    } else if (Math.abs(cal) === 7) {
      cal > 0 ? ((score1 -= 1), (score2 += 3)) : ((score1 += 3), (score2 -= 1));
    } else {
      cal > 0 ? (score1 += 2) : (score2 += 2);
    }
  }

  console.log(`${score1} ${score2}`);
};

const readline = require("readline");
let N = null;
let count = 0;
const data = [];

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (N === null) {
      N = +line;
    } else {
      data.push(line.split(" ").map(Number));
      count += 1;
    }

    if (count === 2) rl.close(); // 필요한 줄 수 만큼 받고 끝냄 (여기선 arr1, arr2)
  }

  solution(N, data);
  process.exit();
})();
