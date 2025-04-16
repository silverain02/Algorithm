function solution(maps) {
    const queue = [[0, 0, 1]];
    const [n, m] = [maps.length, maps[0].length];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;

    let front = 0;
    while (front < queue.length) {
        const [i, j, depth] = queue[front++];
        if (i === n - 1 && j === m - 1) {
            return depth;
        }

        for (let t = 0; t < 4; t++) {
            const ni = i + dx[t];
            const nj = j + dy[t];

            if (
                ni >= 0 && nj >= 0 && ni < n && nj < m &&
                maps[ni][nj] === 1 && !visited[ni][nj]
            ) {
                visited[ni][nj] = true; // ✅ 큐에 넣기 전에 방문 처리
                queue.push([ni, nj, depth + 1]);
            }
        }
    }

    return -1;
}
