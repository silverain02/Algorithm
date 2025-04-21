function solution(board) {
    const n = board.length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // visited[x][y][direction] = 최소 비용
    const visited = Array.from({ length: n }, () => 
        Array.from({ length: n }, () => new Array(4).fill(Infinity))
    );
    
    const queue = [];
    
    // 시작점에서 두 방향으로 출발 가능
    for (let dir = 0; dir < 4; dir++) {
        const nx = dx[dir], ny = dy[dir];
        const x = 0 + nx;
        const y = 0 + ny;
        if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === 0) {
            queue.push([x, y, 100, dir]);
            visited[x][y][dir] = 100;
        }
    }

    while (queue.length > 0) {
        const [x, y, cost, dir] = queue.shift();

        for (let newDir = 0; newDir < 4; newDir++) {
            const nx = x + dx[newDir];
            const ny = y + dy[newDir];

            if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
                let newCost = cost + 100;
                if (dir !== newDir) newCost += 500;

                if (visited[nx][ny][newDir] > newCost) {
                    visited[nx][ny][newDir] = newCost;
                    queue.push([nx, ny, newCost, newDir]);
                }
            }
        }
    }

    return Math.min(...visited[n - 1][n - 1]);
}
