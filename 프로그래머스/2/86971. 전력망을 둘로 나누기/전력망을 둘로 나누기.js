function solution(n, wires) {
    //초기화
    let answer = 0;
    //검증
    function isSmall(a,b){
        // console.log('@',n/2-a,n/2-b)
        if(Math.abs(n/2-a) > Math.abs(n/2-b)) return b
        else return a
    }
    //모든 연결 경로 완탐
    for(let i=0; i<n; i++){
        //1. 연결끊기
        const t = wires[i];
        const arr = wires.slice()
        arr.splice(i,1);
        // console.log("#1",i,arr);
        
        //2. map 그래프 전환
        const map = new Map();
        for(let w of arr){
            if(!map.has(w[0])) map.set(w[0],[])
            if(!map.has(w[1])) map.set(w[1],[])
            map.get(w[0]).push(w[1]);
            map.get(w[1]).push(w[0]);
        }
        // console.log(map);
        
        //3. DFS로 개수 찾기
        const visited = new Array(n+1).fill(0)
        const stack = [arr[0][0]];
        
        let cnt = 0;
        while(stack.length !== 0){
            const v = stack.pop();
            visited[v] = true;
            cnt ++;
            for(let e of map.get(v)){
                if(!visited[e]){
                    stack.push(e)
                }
            }
        }
        answer = isSmall(cnt,answer)
        
        // console.log(cnt,answer)
    }
    // console.log(answer)
    return(Math.abs((n-answer)-answer))
}