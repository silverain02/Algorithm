function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const mapArr = maps.map(row => row.split(''));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const bfs = (start, endChar) => {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [[...start, 0]];
        visited[start[0]][start[1]] = true;

        while (queue.length > 0) {
            const [x, y, cnt] = queue.shift();
            if (mapArr[x][y] === endChar) return [x, y, cnt];

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (
                    nx >= 0 && ny >= 0 && nx < n && ny < m &&
                    !visited[nx][ny] && mapArr[nx][ny] !== 'X'
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, cnt + 1]);
                }
            }
        }
        return null;
    };

    let start, lever;

    // 위치 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mapArr[i][j] === 'S') start = [i, j];
            if (mapArr[i][j] === 'L') lever = [i, j];
        }
    }

    const leverResult = bfs(start, 'L');
    if (!leverResult) return -1;

    const endResult = bfs([leverResult[0], leverResult[1]], 'E');
    if (!endResult) return -1;

    return leverResult[2] + endResult[2];
}
