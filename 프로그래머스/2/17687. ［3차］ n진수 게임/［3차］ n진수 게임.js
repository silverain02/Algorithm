function solution(n, t, m, p) {
    //초기화
    const answer = []
    let [cnt,str] = [0,""]
    
    //1. 싸이클 돌기
    for(let i=0;i<t; i++){
        //2. 전체길이 m+의 문자열 구하기
        while(str.length<m){
            str += cnt.toString(n).toUpperCase();
            cnt++;
        }
        
        //3. m만큼 한 사이클 용으로 자르기
        str_block = str.slice(0,m);
        str = str.slice(m,str.length);
        
        //4. 결과 내 순서 push
        answer.push(str_block[p-1])
    }
    
    return answer.join('')
}