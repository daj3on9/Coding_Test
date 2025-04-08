const solution = (N, data) => {
  let sortData = data.sort(compare);
  for (let i = 0; i < N; i++) {
    sortData[i][0] = N - i - 1;
  }

  sortData.sort(function (a, b) {
    return a[1] - b[1];
  });

  for (let i = 0; i < N; i++) {
    console.log(sortData[i][0]);
  }
};

function compare(a, b) {
  const islandA = a[0];
  const islandB = b[0];

  if (islandA[0] !== islandB[0]) {
    return islandA[0] - islandB[0];
  }

  return islandA[1] - islandB[1];
}

const readline = require("readline");
let N = null;
let count = 0;
const data = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      data.push([line.split(" ").map((el) => +el), count]);
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(N, data);
  process.exit();
})();
