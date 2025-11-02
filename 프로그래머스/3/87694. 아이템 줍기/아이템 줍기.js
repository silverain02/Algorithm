function solution(rectangle, characterX, characterY, itemX, itemY) {
    const MAX = 102; // 좌표 확장 후 범위
    const map = Array.from(Array(MAX), () => Array(MAX).fill(0));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    // 좌표 2배로 확장
    rectangle.forEach(r => {
        const [x1, y1, x2, y2] = r.map(v => v * 2);
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                // 테두리
                if (x == x1 || x == x2 || y == y1 || y == y2) {
                    if (map[x][y] !== 2) map[x][y] = 1;
                } else {
                    // 내부
                    map[x][y] = 2;
                }
            }
        }
    });

    // BFS
    const q = [[characterX * 2, characterY * 2, 0]];
    const visited = Array.from(Array(MAX), () => Array(MAX).fill(false));
    visited[characterX * 2][characterY * 2] = true;

    while (q.length) {
        const [x, y, d] = q.shift();
        if (x === itemX * 2 && y === itemY * 2) return d / 2;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (map[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                q.push([nx, ny, d + 1]);
            }
        }
    }
}
