function solution(today, terms, privacies) {
    // 1. terms hash map전환
    const termsMap = new Map()
    terms.forEach((e)=>{
        const [key,val] = e.split(' ')
        termsMap.set(key,Number(val))
    })
    
    //2. privcies 완탐하며 result 추적
    const result = [];
    privacies.forEach((e,idx)=>{
        //2.1. 분리해 map 전환
        const privacyMap = new Map();
        const [date,key] = e.split(' ')
        const dateKey = ['y','m','d']
        let dateKeyIdx = 0;
        date.split('.').forEach((e)=>{
            privacyMap.set(dateKey[dateKeyIdx],Number(e))
            dateKeyIdx ++;
        })
        //2.2. privacy 매핑 및 올림 계산
        const addedDays = termsMap.get(key) * 28 -1
        privacyMap.set('d',privacyMap.get('d')+addedDays)
        if(privacyMap.get('d')>28){
            privacyMap.set('m',privacyMap.get('m')+Math.floor(privacyMap.get('d')/28))
            privacyMap.set('d',privacyMap.get('d')%28)
        }
        if (privacyMap.get('d') === 0) {
            privacyMap.set('d', 28);
            privacyMap.set('m', privacyMap.get('m') - 1);
        }
         if(privacyMap.get('m')>12){
            privacyMap.set('y',privacyMap.get('y')+Math.floor(privacyMap.get('m')/12))
            privacyMap.set('m',privacyMap.get('m')%12)
        }
        if (privacyMap.get('m') === 0) {
            privacyMap.set('m', 12);
            privacyMap.set('y', privacyMap.get('y') - 1);
        }
        //2.3. Today와 비교
        dateKeyIdx = 0;
        const todayMap = new Map();
        today.split('.').forEach((e)=>{
            todayMap.set(dateKey[dateKeyIdx],Number(e))
            dateKeyIdx ++;
        })
        
        dateKeyIdx = 0;
        while(dateKeyIdx<3){
            if(todayMap.get(dateKey[dateKeyIdx])>privacyMap.get(dateKey[dateKeyIdx])){
                result.push(idx+1);
                return;
                
            }else if(todayMap.get(dateKey[dateKeyIdx])<privacyMap.get(dateKey[dateKeyIdx])){
                return
            }else if(dateKeyIdx==2){
                return
            }
            dateKeyIdx ++;
        }
    })
    return result
}