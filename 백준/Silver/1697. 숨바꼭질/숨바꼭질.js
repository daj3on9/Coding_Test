const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const [s, y] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = new Array(100001).fill(-1);

if (s === y) console.log(0);
else {
  arr[s] = 0;

  const queue = [s];
  let head = 0;

  while (queue.length > 0) {
    const x = queue[head++];

    for (const nx of [x - 1, x + 1, x * 2]) {
      if (nx < 0 || nx > 100000 || arr[nx] !== -1) continue;

      arr[nx] = arr[x] + 1;

      if (nx === y) {
        console.log(arr[nx]);
        process.exit(0);
      }

      queue.push(nx);
    }
  }
}
