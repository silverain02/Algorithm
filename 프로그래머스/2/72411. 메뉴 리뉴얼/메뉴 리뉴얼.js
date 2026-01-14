function comb(arr,n) {
    if(n==1){
        return arr.map((val)=>[val])
    }
    let result = [];
    arr.forEach((fixed,idx,origins)=>{
        let rest = origins.slice(idx+1)
        let combs = comb(rest,n-1)
        combs.forEach((comb)=>{
            result.push([fixed,...comb]);
        })
    })
    return result
}

function solution(orders, course) {
    //0. 초기화
    const nmap = new Map()
    course.forEach((c)=>{
        nmap.set(c,new Set())
    })
    const map = new Map()
    //1. orders순회
    orders.forEach((e)=>{
        //1-1. order 요소 조합 -> 키 리스트 생성
        let keys = [];
        const arr = e.split('')
        course.forEach((c)=>{
            if(c <= orders.length){
                const temp = comb(arr,c)
                if(temp.length!==0){
                    keys = keys.concat(temp)
                }
            }
        })
        //1-2. keys순환하며 매핑
        keys.forEach((k)=>{
            const str = k.sort().join('');
            //1-2-1.map에 추가
            if(!map.has(str)) map.set(str,1)
            else map.set(str,map.get(str)+1)
            //1-2-2 nmap 업데이터
            nmap.get(str.length).add(str)
        })
    })
    
    //2. map 2개 연결
    const answers = [];
    for([k,v] of nmap){
        let answer = null;
        let max = 0;
        
        const cntmap = new Map()
        // max값 찾기
        v.forEach(e=>{
            if(map.get(e)>max) {
                [answer,max] = [e,map.get(e)]
                max = map.get(e)
            }
            
            //cntmap 추가
            if(!cntmap.has(map.get(e))) cntmap.set(map.get(e),[])
            cntmap.get(map.get(e)).push(e);
        })
        
        
        if(max>1){
            cntmap.get(max).forEach(t=>{
                answers.push(t)
            })
        }
    }
    
    return answers.sort()
}