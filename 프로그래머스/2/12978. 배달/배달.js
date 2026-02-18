function solution(N, road, K) {
    //1. 인접행렬 map 생성
    const map = new Map();
    for(let i=1; i<=N; i++){
        const nMap = new Map()
        map.set(i,nMap);
    }
    //1-1. road돌며 인접 map update
    for(const r of road){
        const [a,b,w] = r;
        if(map.get(a).has(b) && map.get(a).get(b) <= w) continue
        map.get(a).set(b,w)
        map.get(b).set(a,w)
    }
    //2. 다익스트라 
    const board = new Map();
    for(let i=2; i<=N; i++){
        board.set(i,Infinity)
    }
    //2-1. DFS돌기
    const stack = [[1,0]];
    while(stack.length!==0){
        const [v,w] = stack.pop();
        const nmap = map.get(v);
        //board update
        board.set(v,w)
        //move
        for(const k of nmap.keys()){
            if(k!==1 && board.get(k)>w+nmap.get(k) && K>=w+nmap.get(k)){
                stack.push([k,w+nmap.get(k)]);
            }
        }
    }
    console.log(board)
    //3. 결과
    let result = 0;
    for(const k of board.keys()){
        if(board.get(k) <= K) result++
    }
    return result
    
}