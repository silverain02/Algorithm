function solution(s) {
    //0. 초기화
    let answer = 0;
    //1. 시작 index잡기 N
    for(let i=0; i<s.length; i++){
        const stack = []
        //1-1. s 돌기 N
        for(let j=i; j<i+s.length; j++){
            const v = s[j%s.length];
            //1-1-1. stack 쌓기
            stack.push(v);
            //1-1-2. stack 제거
            let top = stack[stack.length-1];
            let prev = stack[stack.length-2];
            while((prev=='[' && top==']') || (prev=='{' && top=='}') || (prev=='(' && top==')')){
                stack.pop();
                stack.pop();
                top = stack[stack.length-1];
                prev = stack[stack.length-2];
            }
        }
        //1-2. 올바른 체크
        if(stack.length == 0) answer ++;
    }
    return answer
}