function solution (alp,cop,problems){
    //1. 목표 알고력과 코딩력 계산
    let maxAlp = 0;
    let maxCop = 0;
    for(const[alp_req,cop_req,alp_rwd,cop_rwd,cost] of problems){
        maxAlp = Math.max(maxAlp,alp_req);
        maxCop = Math.max(maxCop,cop_req)
    }
    
    //2. 초기값 조정 (현재 능력치가 목표치보다 큰 경우)
    alp = Math.min(alp,maxAlp);
    cop = Math.min(cop,maxCop);
    
    //3. DP 배열 초기화
    const dp = Array.from({length:maxAlp+1},()=>Array(maxCop+1).fill(Infinity));
    dp[alp][cop] = 0;
    
    //4. 가능한 모든 상태 탐색
    for(let i=alp; i<=maxAlp; i++){
        for(let j=cop; j<=maxCop; j++){
            //현재 능력치가 목표치보다 작을 때만 갱신
            if(i+1<=maxAlp) dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+1);
            if(j+1<=maxCop) dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+1);
            
            //5. 각 문제를 풀어보는 경우
            for(const [alp_req, cop_req, alp_rwd,cop_rwd, cost] of problems){
                if(i>= alp_req && j>=cop_req){
                    const nextAlp = Math.min(maxAlp,i+alp_rwd);
                    const nextCop = Math.min(maxCop, j+cop_rwd);
                    dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[i][j]+cost);
                }
            }
        }
    }
    return dp[maxAlp][maxCop] //6. 목표 알고력과 코딩력 도달을 위한 최소시간
}