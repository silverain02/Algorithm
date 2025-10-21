function solution(gems) {
    let answer = [0,gems.length]; //1. 초기 범위를 최대로 설정
    const gemsKinds = new Set(gems).size; //2 보석 종류 수
    
    let start=0, end=0;
    let gemsCount = new Map(); //3. 보석 개수를 저장할 Map
    gemsCount.set(gems[0],1); //4. 첫번쨰 보석을 초기값으로 저장
    
    while(start<gems.length && end<gems.length){
        if(gemsCount.size === gemsKinds){ //모든 보석 종류를 포함하는지 확인
            //6.현재 구간이 더 짧으면 결과 갱신
            if(end-start <answer[1]-answer[0]){
                answer = [start+1,end+1]; //1-based index로 변환해 저장
            }
            
            //7. start포인터 옮겨서 구간 줄이기
            gemsCount.set(gems[start], gemsCount.get(gems[start])-1)
            
            //8. 보석의 개수가 0이 되면 Map에서 제거
            if(gemsCount.get(gems[start])===0){
                gemsCount.delete(gems[start]);
            }
            start +=1;
        }else{
            //9. end 포인터를 옮겨서 구간 늘리기
            end+=1;
            if(end>=gems.length) break; //end가 배열을 넘어서면 종료
            gemsCount.set(gems[end], (gemsCount.get(gems[end])||0)+1);
        }
    }
    return answer
}