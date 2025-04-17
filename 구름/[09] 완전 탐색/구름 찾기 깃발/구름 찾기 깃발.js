const solution = (N, K, data) => {
  // 방향 정의
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

  let answer = 0;

  //  게임판 전부 순회하기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 구름이 없는 칸에만 깃발을 꽂을 수 있음!!
      if (data[i][j] === 0) {
        let countCloud = 0;

        // 현재 칸에서 상하좌우,대각선 모두 확인하기!
        for (let d = 0; d < 8; d++) {
          const nx = i + dx[d]; // 현재 칸 인덱스 + 방향
          const ny = j + dy[d]; // 현재 칸 인덱스 + 방향

          // 정의한 방향이 게임판을 벗어나지 않는지 검사하기
          // 방향안에 구름이 있는지 확인하기
          if (nx >= 0 && nx < N && ny >= 0 && ny < N && data[nx][ny] === 1) {
            // 게임판을 벗어나지 않고 방향 안에 구름이 있으면 countCloud 추가해주기
            countCloud++;
          }
        }
        // countCloud가 찾고있는 K와 일치하면 answer 추가해주기
        if (countCloud === K) answer++;
      }
    }
  }

  // answer가 구름 개수가 K개인걸 만족하는 거니까 answer을 출력해준다.
  console.log(answer);
};

const readline = require("readline");
let N = 0,
  K = 0;
let count = 0;
const data = [];

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (count === 0) {
      [N, K] = line.split(" ").map(Number);
    } else {
      data.push(line.split(" ").map(Number));
    }

    count++;

    if (count === N + 1) rl.close();
  }

  solution(N, K, data);
})();
