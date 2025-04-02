const readline = require("readline");

(async () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n = 0;
  let inputs = [];

  rl.on("line", (line) => {
    if (n === 0) {
      n = Number(line); // 첫 줄은 입력 개수
    } else {
      inputs = line.split(" ").map(Number); // 두 번째 줄 공백으로 나눈 숫자 배열

      let length = inputs[0] + inputs[n - 1];

      for (let i = 0; i < n - 1; i++) {
        length += Math.abs(inputs[i] - inputs[i + 1]);
      }

      length += n * 2;

      console.log(length);

      rl.close();
    }
  });

  rl.on("close", () => {
    process.exit();
  });
})();
