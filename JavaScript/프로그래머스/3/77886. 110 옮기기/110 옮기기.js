function solution(s) {
    const answer = []; // 1. 최종 결과 저장 배열
    
    //2. 주어진 각 문자열에 대해 처리
    for(const str of s){
        const stack = []; //3. 110 패턴을 찾기 위한 스택
        let count = 0; //4. 110패턴의 개수 카운트
        
        //5. 문자열의 각 문자를 순회하며 '110' 패턴 찾기
        for (const char of str){
            stack.push(char) //6. 현재 문자를 스택에 추가
            // 7. 스택의 마지막 3자리가 110인지 확인
            if(stack.length>=3 && 
               stack[stack.length-3] ==='1' &&
               stack[stack.length-2] ==='1' &&
               stack[stack.length-1] ==='0'){
                count += 1; // 8. 110패턴 발견 시 카운트 증갸
                stack.splice(-3); //9. 스택에서 110 패턴 제거
            }
        }
        
        // 10. 스택에서 마지막으로 등장한 '0'의 위치 찾기
        let idx = stack.lastIndexOf('0');
        
        if(idx === -1){
            // 11. 스택에 '0'이 없는 경우, '110'의 패턴을 앞에 추가
            answer.push('110'.repeat(count)+stack.join(''));
        }else{
            //12. 마지막 0뒤에 110 삽입
            stack.splice(idx+1,0,'110'.repeat(count))
            answer.push(stack.join('')); //최종 결과 배열 추가
        }
    }
    return answer
}
