function solution(n, times) {
    //1. 탐색범위 설정
    let left = 0n;
    //최대시간 : 가장 느린 심사관이 n명 전부 처리
    const maxTime = BigInt(Math.max(...times))
    let right = maxTime * BigInt(n);
    
    //정답 (최소 시간)
    let answer = right;
    
    //2. 이분 탐색
    while(left <= right){
        const mid = (left+right)/2n;
        
        //3. mid 시간 안에 처리 가능한 사람 수 계산
        let processed = 0n;
        for(const t of times){
            processed += mid/BigInt(t);
            
            if(processed >= BigInt(n)) break;
        }
        //4. 조건에 따라 범위 줄이기
        if(processed>= BigInt(n)){
            //mid시간안에 n명 처리 가능 -> 시간 충분
            //더 작은 시간에서도 가능한지 왼쪽 탐색
            answer = mid;
            right = mid-1n;
        }else{
            //mid시간안에 n명 처리 못함-> 시간 부족
            //더 큰 시간 탐색
            left = mid+1n;
        }
    }
    return answer
}