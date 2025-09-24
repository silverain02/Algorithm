function solution(users, emoticons) {
    const DISCOUNTS = [10,20,30,40];
    const m = emoticons.length;
    
    //각 이모티콘별 4가지 할인 적용가 미리 계산
    const discounted = emoticons.map(price=>DISCOUNTS.map(d => Math.floor(price * (100 - d) / 100)))
    
    let bestSubs = 0;
    let bestRevenue =0;
    const chosenIdx = Array(m).fill(0) //각 이모티콘에 선택된 할인 인덱스(0-3)
    
    function evaluate(){
        let subs = 0;
        let revenue = 0;
        
        for (const [needRate,limitPrice]of users){
            let spend = 0
            for(let i=0; i<m; i++){
                const d = DISCOUNTS[chosenIdx[i]];
                if(d>=needRate) spend += discounted[i][chosenIdx[i]]
            }
            if(spend>=limitPrice) subs += 1 //구독 전환
            else revenue+= spend; //매출 합산
        }
        // 가입자수 => 매출
        if(subs>bestSubs||(subs==bestSubs && revenue > bestRevenue)){
            bestSubs = subs;
            bestRevenue = revenue;
        }
    }
    
    function dfs(depth){
        if(depth == m){
            evaluate()
            return
        }
        for(let k=0;k<4;k++){
            chosenIdx[depth] = k;
            dfs(depth+1)
        }
    }
    dfs(0)
    return [bestSubs, bestRevenue];
}