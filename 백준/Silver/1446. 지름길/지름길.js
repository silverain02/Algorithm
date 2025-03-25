// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function dijkstra(N, D, shortcuts) {
  const INF = Infinity;
  const dist = Array(D + 1).fill(INF);
  dist[0] = 0;

  // 그래프 기본 설정 (각 위치에서 +1 이동 가능)
  const graph = Array.from({ length: D + 1 }, () => []);
  for (let i = 0; i < D; i++) {
    graph[i].push([i + 1, 1]); // 기본 도로 (i -> i+1, 거리 1)
  }

  // 지름길 추가
  for (const [start, end, length] of shortcuts) {
    if (end <= D && end - start > length) {
      graph[start].push([end, length]); // 지름길 간선 추가
    }
  }

  // 다익스트라 알고리즘 (우선순위 큐 사용)
  const pq = [[0, 0]]; // [현재 거리, 현재 위치]

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]); // 거리 기준으로 정렬 (MinHeap 대체)
    const [curDist, curPos] = pq.shift();

    if (curDist > dist[curPos]) continue; // 기존 거리보다 크면 무시

    for (const [nextPos, weight] of graph[curPos]) {
      const nextDist = curDist + weight;
      if (nextDist < dist[nextPos]) {
        dist[nextPos] = nextDist;
        pq.push([nextDist, nextPos]);
      }
    }
  }

  return dist[D];
}

// 입력 처리
const [N, D] = stdin[0].split(" ").map(Number);
const shortcuts = stdin.slice(1).map((line) => line.split(" ").map(Number));

console.log(dijkstra(N, D, shortcuts));