const solution = (N, M, x, heights, Q, directions) => {
  let result = 0;
  let currentPos = x;
  let currentHeights = heights;

  const reset = heights.map((h) => -h);
  let growth = 0;

  for (let i = 0; i < Q; i++) {
    const treeIndex = currentPos - 1;
    const effectiveHeight = growth - reset[treeIndex];

    if (effectiveHeight >= M) {
      result += effectiveHeight;
      reset[treeIndex] = growth;
    }

    const dir = directions[i];
    if (dir === "L") {
      currentPos = currentPos === 1 ? N : currentPos - 1;
    } else if (dir === "R") {
      currentPos = currentPos === N ? 1 : currentPos + 1;
    }

    growth++;
  }

  console.log(result);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 4) {
    rl.close();
  }
});

rl.on("close", () => {
  const [N, M, x] = input[0].split(" ").map(Number);
  const heights = input[1].split(" ").map(Number);
  const Q = Number(input[2]);
  const directions = input[3].split(" ");

  solution(N, M, x, heights, Q, directions);
  process.exit();
});
