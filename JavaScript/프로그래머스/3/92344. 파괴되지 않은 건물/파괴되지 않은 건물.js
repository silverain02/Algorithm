function solution(board, skill) {
    const N = board.length; //1. 보드의 행 길이
    const M = board[0].length; //2. 보드의 열 길이
    
    let answer = 0; //3. 살아남은 건물 개서 저장 변수
    let dp = new Array(N).fill().map(_=>new Array(M).fill(0));//4.변화량을 기록할 2차원 배열 초기화
    
    //5. 스킬로 인한 변화량 기록
    for([type,r1,c1,r2,c2,degree] of skill){
        const d = type ===1? -degree:degree; //6.type이 1이면 음수, 2이면 양수
        dp[r1][c1] += d; //7. 스킬의 시작 지점에 변화량 추가
        if(c2+1<M) dp[r1][c2+1] -= d; //8.행의 범위를 벗어나지 않으면 오른쪽 끝에 변화량을 빼줌
        if(r2+1<N) dp[r2+1][c1] -= d; //9. 열의 범위를 벗어나지 않으면 아래쪽 끝에 변화량을 뺴줌
        if(r2+1<N && c2+1<M) dp[r2+1][c2+1] += d; //10. 오른쪽 아래 모서리의 변화량을 추가해 보정
    }
    //11. 변화량에 대한 누적합을 구한다
    for(let i=0; i<N; i+=1){
        for(let j=0; j<M; j+=1){
            const top=i>0? dp[i-1][j]:0; //위쪽 셀의 누적합
            const left = j>0? dp[i][j-1]:0; //왼쪽 셀의 누적합
            const intersection = i>0 && j>0?dp[i-1][j-1]:0; //왼쪽 위 대각선의 누적합
            
            dp[i][j] = top+left-intersection +dp[i][j]; //누적합 계산
            answer += dp[i][j] + board[i][j]>0;
        }
    }
    return answer;
    
}