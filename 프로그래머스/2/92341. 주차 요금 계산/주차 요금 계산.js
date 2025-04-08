function solution(fees, records) {
    //누적 시간 저장 Hash
    const map = new Map()
    
    //records 순환 -> stack 저장
    for(const r of records){
        const [time, car, type] = r.split(' ');
        //map 저장
        if(!map.has(car)) map.set(car,{accTime:0,stack:[]});
        map.get(car).stack.push(`${time} ${type}`)
    }
    
    //누적 시간 계산 
    for(let [k,v] of map.entries()){
        console.log('target',k,v)
        //홀수면 마지막 출차 추가
        if(v.stack.length%2!==0){
            v.stack.push('23:59 OUT')
        }
        //시간계산
        while(v.stack.length>0){
            //2개씩 pop
            const [outTimeH, outTimeM] = v.stack.pop().split(' ')[0].split(":");
            const [inTimeH, inTimeM] = v.stack.pop().split(' ')[0].split(":");
            
            //시간 계산
            let timeDiff = 0
            timeDiff += (outTimeH-inTimeH)*60
            timeDiff += (outTimeM-inTimeM)
            
            v.accTime += timeDiff
        }
    }
    
    //요금 계산
    const sortedMap = new Map([...map.entries()].sort((a, b) => Number(a[0])-Number(b[0])));
    console.log(sortedMap)
    const result = []
for (let [k, v] of sortedMap.entries()) {
  const t = v.accTime;
  if (t <= fees[0]) {
    result.push(fees[1]);
  } else {
    const extraTime = t - fees[0];
    const extraUnits = Math.ceil(extraTime / fees[2]);
    const totalFee = fees[1] + (extraUnits * fees[3]);
    result.push(totalFee);
  }
}
    
    // console.log(result)
    return result
}