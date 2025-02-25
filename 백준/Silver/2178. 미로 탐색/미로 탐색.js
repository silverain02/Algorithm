const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

//입력 처리
const [n,m] = stdin[0].split(' ').map(Number)
const map = stdin.slice(1).map((e)=>e.split('').map(Number))

//bfs
let result = Number.POSITIVE_INFINITY
const di = [-1,1,0,0]
const dj = [0,0,-1,1]
function bfs(graph,startNode,visited){
    const q = []
    q.push(startNode)
    visited[startNode[0]][startNode[1]] = true

    while(q.length !== 0){
        const v = q.shift()

        //목적지 확인
        if(v[0]==n-1 &&v[1]==m-1){
            result = Math.min(result,v[2])
        }

        //인접 노드 
        for (let t=0;t<4;t++){
            const ni = v[0]+di[t]
            const nj = v[1]+dj[t]
            const depth = v[2]+1

            if(ni>=0 && ni<n && nj>=0 && nj<m && !visited[ni][nj] && graph[ni][nj]){
                q.push([ni,nj,depth])
                visited[ni][nj]=true
            }
        }
    }
}

let visited = new Array(n).fill().map(_=>new Array(m).fill(false))
bfs(map,[0,0,1],visited)
console.log(result)
