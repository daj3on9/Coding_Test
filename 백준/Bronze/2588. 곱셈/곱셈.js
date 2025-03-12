const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num1 = Number(input[0]); // 첫 번째 세 자리 자연수
const num2 = input[1].split("").map(Number).reverse(); // 두 번째 세 자리 자연수 (숫자로 변환 후 뒤집음)

let answer = 0;

for (let idx = 0; idx < num2.length; idx++) {
  let mul = num1 * num2[idx];
  console.log(mul); // (3), (4), (5) 출력
  answer += mul * 10 ** idx; // 정확한 자리수 반영
}

console.log(answer); // (6) 출력
