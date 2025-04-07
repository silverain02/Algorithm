function combinations(arr,n){
    //1개만 뽑는다면 그대로 조합을 반환하며 탈출 조건으로 사용
    if(n===1) return arr.map((v)=>[v]);
    const result = [];
    
    //요소를 순환
    arr.forEach((fixed,idx,arr)=>{
        //현 idx이후 요소를 추출
        //idx번쨰는 선택된 요소
        const rest = arr.slice(idx+1);
        //선택된 요소와 재귀호출을 통해 구한 조합을 합침
        const combis = combinations(rest, n - 1);
        const combine = combis.map((v) => [fixed, ...v]);
        //결과값을 추가
        result.push(...combine);
        })
    //결과 반환
    return result
}

function solution(orders, course) {
    const answer = [];
    
    for(const c of course){
        //1. 각 코스요리 길이에 대해
        const menu = [];
        for(const order of orders){
            //모든 주만에 대해
            const orderArr = order.split("").sort(); //주문을 배열로 만든 후 정렬
            //2. combinations()로 메뉴 구성을 모두 구함
            const comb = combinations(orderArr,c);
            menu.push(...comb);
        }
        
        //3. 각 메뉴 구성이 몇번 주문되었는지 세줌
        const counter={}
        for (const m of menu){
            const key = m.join(''); //배열을 문자열로 변환
            counter[key]=(counter[key]||0)+1;
        }
        
        const max = Math.max(...Object.values(counter));
        if(max>1){//4. 가장 많이 주문된 구성이 1번 이상 주문된 경우
            for (const [key,value] of Object.entries(counter)){
                if(value==max){//가장많이 주문된 구성을 찾아서
                    answer.push(key); //6.정답 배열에 추가
                }
            }
        }
    }
    //7. 오름 차순 정렬 후 반환
    return answer.sort();
    
}