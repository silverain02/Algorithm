function solution(want, number, discount) {
    //해시맵 초기화
    const map = new Map();
    for(elem of discount.slice(0,10)){
        if(!map.has(elem)) map.set(elem,0)
        map.set(elem,map.get(elem)+1)
    }
    
    let result = 0;
    //첫째날 돌기
    for(let i=0; i<discount.length; i++){
        // console.log("현재 맵",i,":", map)
        
        // want 충족여부 check
        let isValid = true;
        for(let j=0; j<want.length; j++){
            if( !map.has(want[j]) || map.get(want[j])<number[j]){
                //부족
                isValid = false
                break;
            }
        }
        if(isValid) result ++
        
        //해시맵 업데이트
        //시작점 줄이기
        map.set(discount[i],map.get(discount[i])-1);
        //끝점 늘리기
        if(i<=discount.length-10) {
            const target = discount[i+10]
            if(!map.has(target)) map.set(target,0)
            map.set(target,map.get(target)+1)
        }
    }
    // console.log(result)
    
    return result
}