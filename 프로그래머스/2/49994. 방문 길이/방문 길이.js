function solution(dirs) {
    const visited = new Set();
    let x = 0, y = 0;
    
    const moves = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    };

    for (let dir of dirs) {
        const [dx, dy] = moves[dir];
        const nx = x + dx;
        const ny = y + dy;

        // 범위를 벗어나면 무시
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        // 경로(길)를 저장 (양방향)
        visited.add(`${x},${y}:${nx},${ny}`);
        visited.add(`${nx},${ny}:${x},${y}`);

        // 위치 갱신
        x = nx;
        y = ny;
    }

    return visited.size / 2;  // 양방향 저장했으므로 2로 나눔
}
