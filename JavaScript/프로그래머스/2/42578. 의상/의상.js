function solution(clothes) {
    const map = new Map();
    clothes.forEach((c)=>{
        let [v,k] = c;
        if(!map.has(k)) map.set(k,1)
        map.set(k,map.get(k)+1);
    })
    let answer = 1;
    for(let v of map.values()){
        answer *= v
    }
    if(answer==1) return 0
    else return answer-1
}