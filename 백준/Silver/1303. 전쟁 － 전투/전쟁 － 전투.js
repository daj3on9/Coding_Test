const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const field = input.slice(1).map(line => line.split(''));

const visited = Array.from({ length: M }, () => Array(N).fill(false));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let whitePower = 0;
let bluePower = 0;


function bfs(x, y, team) {
    let queue = [[x, y]];
    visited[x][y] = true;
    let count = 1;

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
            const nx = cx + dx[dir];
            const ny = cy + dy[dir];

            if (
                nx >= 0 && nx < M &&
                ny >= 0 && ny < N &&
                !visited[nx][ny] &&
                field[nx][ny] === team
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                count++;
            }
        }
    }

    return count;
}

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            const team = field[i][j];
            const power = bfs(i, j, team);
            if (team === 'W') whitePower += power * power;
            else bluePower += power * power;
        }
    }
}

console.log(`${whitePower} ${bluePower}`);
