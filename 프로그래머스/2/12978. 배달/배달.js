function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0;

    // 그래프 구성
    for (const [a, b, cost] of road) {
        graph[a].push([b, cost]);
        graph[b].push([a, cost]);
    }

    const queue = [[0, 1]]; // [거리, 노드]

    while (queue.length > 0) {
        // 거리 기준으로 정렬
        queue.sort((a, b) => a[0] - b[0]);
        const [dist, node] = queue.shift(); // 가장 가까운 노드

        // 이미 더 짧은 경로로 방문했다면 skip
        if (dist > distances[node]) continue;

        for (const [nextNode, nextDist] of graph[node]) {
            const cost = dist + nextDist;
            if (cost < distances[nextNode]) {
                distances[nextNode] = cost;
                queue.push([cost, nextNode]);
            }
        }
    }

    return distances.filter((d) => d <= K).length;
}
