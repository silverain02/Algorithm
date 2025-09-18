function solution(cap, n, deliveries, pickups) {
    //보정
    while(deliveries[deliveries.length-1] == 0){
        deliveries.pop()
    }
    while(pickups[pickups.length-1] == 0){
        pickups.pop()
    }
    
    //1. needLen초기화
    let needLen = Math.max(pickups.length,deliveries.length);
    let result = 0;
    
    while(needLen !== 0){
        //2. result 업데이트
        result += needLen*2;
        //3. deliveries 찾기
        let carry = cap;
        while(carry!==0 && deliveries.length !==0){
            let target = deliveries[deliveries.length-1];
            if(target>carry){
                deliveries[deliveries.length-1] -= carry
                carry = 0;
            }else{
                carry -= target;
                deliveries[deliveries.length-1] = 0;
            }
            //보정
            while(deliveries[deliveries.length-1] == 0){
                deliveries.pop()
            }
        }
        
        
        //4. pickups 찾기
        carry = cap;
        while(carry!==0 && pickups.length !== 0){
            let target = pickups[pickups.length-1];
            if(target>carry){
                pickups[pickups.length-1] -= carry
                carry = 0;
            }else{
                carry -= target;
                pickups[pickups.length-1] = 0;
            }
            //보정
            while(pickups[pickups.length-1] == 0){
                pickups.pop()
            }
        }
        
        //5. needLen 업데이트
        needLen = Math.max(pickups.length,deliveries.length)
        
    }
    return result;
}