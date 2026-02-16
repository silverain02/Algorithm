function solution(n, computers) {
    //1. N개 노드 map생성
    const map = new Map();
    for(let i=0; i<n; i++){ //O(N)
        const set = new Set()
        map.set(i,set);
    }
    //2. computers돌면서 graph 생성-> map update
    for(let i=0; i<n; i++){
        for(let j=0; j<i;j++){
            if(computers[i][j]==1){
                map.get(i).add(j)
                map.get(j).add(i)
            }
        }
    }
    //3. map dfs돌리기
    const visited = new Set();
    const stack = [];
    let result = 0
    function isFull(){
        for(let i=0; i<n; i++){
            if(!visited.has(i)) {
                result ++;
                return i
            }
        }
        return -1;
    }
    while(true){
        const flag = isFull()
        if(flag<0) return result
        //stack 초기화
        stack.push(flag)
        visited.add(flag)
        while(stack.length!==0){
            const v = stack.pop();
            const nodes = [...map.get(v)]
            for(const k of nodes){
                if(!visited.has(k)){
                    stack.push(k);
                    visited.add(k)
                }
            }
        }
    }
    
}