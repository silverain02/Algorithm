function solution(dirs) {
    //0. 초기화
    let v = [0,0];
    const map = new Map();
    let answer = 0;
    
    //1. dirs순회
    dirs.split('').forEach(e=>{
        //1-1. node이동
        let nv;
        if (e=='U') nv = [v[0],v[1]+1];
        else if (e=='L') nv = [v[0]-1,v[1]];
        else if (e=='R') nv = [v[0]+1,v[1]];
        else nv = [v[0],v[1]-1];
        
        //1-2. 경계 확인
        if(nv[0]>=-5 && nv[0]<=5 && nv[1]>=-5 && nv[1]<=5){
            //1-3. Map 중복 확인
            const [strv,strnv] = [v.join(','),nv.join(',')]
            if(!map.has(strv) || !map.get(strv).has(strnv)){
                answer ++;
                if(!map.has(strv)) map.set(strv,new Set())
                if(!map.has(strnv)) map.set(strnv,new Set())
                map.get(strv).add(strnv)
                map.get(strnv).add(strv)
            }
            //1-4. node update
            v = nv;
        }
    })
    return answer
}