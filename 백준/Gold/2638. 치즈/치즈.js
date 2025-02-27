const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력처리
const [N, M] = stdin[0].split(' ').map(Number);
const map = stdin.slice(1).map(e => e.split(' ').map(Number));

const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

let result = 0;

// 외부 공기 영역을 찾는 bfs
function bfs() {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const queue = [];

    // 맵의 가장자리를 외부 공기로 설정
    for (let i = 0; i < N; i++) {
        if (map[i][0] === 0 && !visited[i][0]) queue.push([i, 0]);
        if (map[i][M - 1] === 0 && !visited[i][M - 1]) queue.push([i, M - 1]);
    }
    for (let j = 0; j < M; j++) {
        if (map[0][j] === 0 && !visited[0][j]) queue.push([0, j]);
        if (map[N - 1][j] === 0 && !visited[N - 1][j]) queue.push([N - 1, j]);
    }

    while (queue.length) {
        const [i, j] = queue.shift();
        if (visited[i][j]) continue;
        visited[i][j] = true;
        for (let t = 0; t < 4; t++) {
            const ni = i + di[t];
            const nj = j + dj[t];
            if (ni >= 0 && ni < N && nj >= 0 && nj < M && !visited[ni][nj] && map[ni][nj] === 0) {
                queue.push([ni, nj]);
            }
        }
    }
    return visited;
}

// 치즈를 녹이는 과정
function meltCheese(visited) {
    let toMelt = [];
    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
            if (map[i][j] === 1) {
                let exposedSides = 0;
                for (let t = 0; t < 4; t++) {
                    const ni = i + di[t];
                    const nj = j + dj[t];
                    if (visited[ni][nj]) {
                        exposedSides++;
                    }
                }
                if (exposedSides >= 2) {
                    toMelt.push([i, j]);
                }
            }
        }
    }

    // 치즈를 한 번에 제거
    toMelt.forEach(([i, j]) => {
        map[i][j] = 0;
    });

    return toMelt.length > 0;
}

// 치즈가 모두 사라질 때까지 반복
while (true) {
    const visited = bfs();  // 외부 공기 영역을 찾음
    if (!meltCheese(visited)) break;  // 치즈가 없으면 종료
    result++;  // 치즈가 한 번 사라졌으므로 시간 증가
}

console.log(result);
