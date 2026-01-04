function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0) //1. 가격이 떨어지지 않은 기간 저장 배열
    //stack 으로 이전가격과 현재 가격 비교
    const stack = [0] //2. 스택 초기화
    for(let i=1; i<n; i++){
        while(stack.length>0 && prices[i] < prices[stack[stack.length-1]]){
            //3. 가격이 떨어졌으므로 이전 가격의 기간을 계산
            const j = stack.pop();
            answer[j] = i-j;
        }
        stack.push(i)
    }
    //4. 스택에 남아있는 가격들은 가격이 떨어지지 않는 경우
    while(stack.length>0){
        const j = stack.pop();
        answer[j] = n-1-j;
    }
    
    return answer
}