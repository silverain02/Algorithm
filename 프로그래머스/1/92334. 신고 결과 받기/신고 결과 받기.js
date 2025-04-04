function solution(id_list, report, k) {
    //HashMap 초기화
    const map = new Map();
    for(v of id_list) map.set(v,{"get":0,put:new Set()});
    
    //report 완탐
    for(w of report){
        const [from,to] = w.split(' ');
        if(!map.get(from).put.has(to)) map.get(to).get++
        map.get(from).put.add(to)
    }
    
    //result 처리
    const set = new Set()
    for(e of id_list){
        if(map.get(e).get>=k){
            set.add(e)
        }
    }
    
    const result = [];
    for(e of id_list){
        result.push([...map.get(e).put].filter(v=>set.has(v)).length)
    }
    
    return result
}