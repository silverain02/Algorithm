// 백트래킹을 위한 DFS
function dfs (curK,cnt,dungeons,visited){
    let answerMax = cnt;
    for(let i = 0; i<dungeons.length; i++){
        // 1. 현재 피로도 curK가 i번째 던전의 최소 필요 피로도 이상이고
        // i번째 던전을 방문한 적이 없다면
        if(curK>=dungeons[i][0] && visited[i]==0){
            visited[i]=1;
            // 2. 현재까지의 최대 탐험가능 던전 수와
            // i번째 던전에서 이동가능한 최대 탐험 가능 던전 수 중 큰 값 업데이트
            answerMax = Math.max(answerMax,dfs(curK-dungeons[i][1],cnt+1,dungeons,visited));
            visited[i]=0;
        }
    }
    return answerMax;
}

// 최대 탐험 가능한 던전 수 를 계산
function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0); // 방문 여부를 저장할 지역 배열
    const answerMax = dfs(k,0,dungeons,visited); //dfs함수 호출
    return answerMax;
}