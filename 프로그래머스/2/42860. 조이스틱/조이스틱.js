function solution(name) {
    let answer = 0;
    let move = name.length -1;
    
    for(let i=0; i<name.length; i++){
        //1. 각 자리 알파벳 변경 최소 횟수
        const upDown = name.charCodeAt(i) - 65;
        const downUp = 91 - name.charCodeAt(i);
        answer += Math.min(upDown,downUp);
        
        //2. A 연속 구간을 찾아 이동 최소화
        let next = i+1;
        while(next<name.length && name[next]==='A') next++;
        
        //3. 최소 좌우 이동 거리 계산
        move = Math.min(
            move,
            i *2 + name.length - next, //오른쪽으로 갔다가 왼쪽으로 돌아오기
            (name.length - next) *2 + i //왼쪽으로 갔다가 오른쪽으로 돌아오기
        )
    }
    
    return answer+move;
}