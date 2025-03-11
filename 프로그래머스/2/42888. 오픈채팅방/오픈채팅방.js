function solution(record) {
    //Map 구성
    const map = new Map();
    const logs = []
    record.forEach(r=>{
        const [direction,id,name] = r.split(' ')
        // console.log(direction,id,name)
        if(direction=='Enter' || direction=='Change'){
            map.set(id,name)
        }
        if(direction=='Enter' || direction=='Leave'){
            logs.push(r)
        }
    })
    // console.log('결과 해시맵', map)
    // console.log('결과 로그',logs)
    
    //배열 순환하며 name 적용
    const result = []
    logs.forEach(l=>{
        const [dir,id,_] = l.split(' ')
        let comment = null
        if(dir=='Enter'){
            comment = `${map.get(id)}님이 들어왔습니다.`
        }else{
            comment = `${map.get(id)}님이 나갔습니다.`
        }
        result.push(comment)
    })
    return result
}