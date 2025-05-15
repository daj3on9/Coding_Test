const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let line = 1;

for (let i = 0; i < N; i++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const A = input[line++].split(" ").map(Number);
  const B = input[line++].split(" ").map(Number);

  B.sort((a, b) => a - b);
  const binarySearch = (target) => {
    let st = 0;
    let ed = B.length;

    while (st < ed) {
      const mid = Math.floor((st + ed) / 2);
      if (B[mid] < target) st = mid + 1;
      else ed = mid;
    }
    return st;
  };

  let count = 0;
  A.forEach((a) => {
    count += binarySearch(a);
  });

  console.log(count);
}
