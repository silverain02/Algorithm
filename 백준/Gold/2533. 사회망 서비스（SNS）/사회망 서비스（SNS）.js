const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

let graph = Array.from({ length: N + 1 }, () => []);
for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
}

let dp = Array.from({ length: N + 1 }, () => [-1, -1]); // dp[node][0] = 얼리 어답터 X, dp[node][1] = 얼리 어답터 O
let visited = Array(N + 1).fill(false);

function dfs(node) {
    visited[node] = true;
    dp[node][0] = 0; // 해당 노드가 얼리 어답터가 아닐 경우
    dp[node][1] = 1; // 해당 노드가 얼리 어답터일 경우

    for (let child of graph[node]) {
        if (!visited[child]) {
            dfs(child);
            dp[node][0] += dp[child][1]; // 내가 얼리 어답터 X → 자식은 얼리 어답터여야 함
            dp[node][1] += Math.min(dp[child][0], dp[child][1]); // 내가 얼리 어답터 O → 자식은 선택 가능
        }
    }
}

// ✅ 루트(1번)에서 DFS 시작
dfs(1);
console.log(Math.min(dp[1][0], dp[1][1]));
