const solution = (data) => {
  // 판타스틱한 갑옷은 소수임!!
  // 소수인지 판별하는 함수
  const isPrime = (num) => {
    // 갑옷의 최솟값은 2! 2보다 작으면 안된다!
    if (num < 2) false;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 갑옷 변형 시스템은 판타스틱 갑옷과 가장 가까운 소수와의 차!!
  const answers = data.map((armor) => {
    // 빼는 값을 1씩 증가해가면서 armor - j 가 소수가 되면은 j를 저장한다!
    // 이때 armor - j이 2보다 작으면 안되니까 조건은 armor - j >= 2 !!
    for (let j = 0; armor - j >= 2; j++) {
      const value = armor - j; // 갑옷 고유값 - j
      // 값옷 고유값에서 j를 뺀 게 소수인지 판별하기
      if (isPrime(value)) return j;
    }
    return -1;
  });

  console.log(answers.join(`\n`));
};

const readline = require("readline");
let N = null;
const data = [];

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      data.push(+line);
    }
    if (data.length === N) rl.close();
  }

  solution(data);
})();
