function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({length:n}, ()=>Array(m).fill(0))
    
    //웅덩이 표시
    for(const [x,y] of puddles){
        dp[y-1][x-1] = -1;
    }
    
    dp[0][0] = 1;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            // console.log(dp[i][j])
            if(dp[i][j]==-1) continue; //웅덩이 스킵
            
            //위에서 오는 경우
            if(i>0 && dp[i-1][j] !==-1){
                dp[i][j] += dp[i-1][j]%MOD;
            }
            
            //왼쪽에서 오는 경우
            if(j>0 && dp[i][j-1] !== -1){
                dp[i][j] += dp[i][j-1]%MOD
            }
            
            dp[i][j] %= MOD;
            
            // console.log(i,j,dp[i][j])
        }
    }
    return dp[n-1][m-1]
}