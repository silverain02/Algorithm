function solution(msg) {
    //1. 해시 초기화
    const alp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const map = new Map()
    for(let i=1; i<27; i++){
        map.set(alp[i-1],i)
    }
    
    const result = []
    
    //2. msg 순환
    let idx = 0;
    let lastidx = 27;
    while(true){
        //2-0. 초기화
        let w = msg[idx];
        let c = null;
        let flag = false
        //2-1. Hash검사
        while(map.has(w)){
            idx++
            if(idx >= msg.length){
                flag = true
                break;
            }
            w += msg[idx]
        }
        //2-2. w+c 등록
        if(flag) result.push(map.get(w))
        else result.push(map.get(w.substring(0,w.length-1)));
        
        if(idx>=msg.length) {
            break
        };
        
        map.set(w, lastidx);
        lastidx ++;
        
    }
    // console.log(map)
    return result
}