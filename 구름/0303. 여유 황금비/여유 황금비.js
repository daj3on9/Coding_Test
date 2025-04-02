const readline = require("readline");

(async () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n = 0;
  const inputs = [];
  let count = 0;

  rl.on("line", (line) => {
    if (n === 0) {
      n = Number(line); // 첫 줄에서 입력 개수 받기
    } else {
      inputs.push(line); // 나머지 줄 입력 받기
      if (inputs.length === n) {
        for (let i = 0; i < n; i++) {
          let [x, y] = inputs[i]
            .split(" ")
            .map(Number)
            .sort((a, b) => a - b);

          if (x * 1.6 <= y && x * 1.63 >= y) count += 1;
        }
        console.log(count);
        rl.close();
      }
    }
  });

  rl.on("close", () => {
    process.exit();
  });
})();
