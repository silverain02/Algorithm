function solution(n, k, cmd) {
    //1. 삭제된 행의 인덱스를 저장하는 배열
    const deleted = [];
    
    //2. 연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
    const up = [...new Array(n+2)].map((_,i)=>i-1);
    const down = [...new Array(n+1)].map((_,i)=>i+1);
    
    //3.현재 위치를 나태내는 인덱스
    k += 1;
    
    //4. cmd 배열요소 하나씩 처리
    for(const item of cmd){
        //5.현재 위치를 삭제하고 그 다음 위치로 이동
        if(item[0]=="C"){
            deleted.push(k);
            // console.log(item)
            up[down[k]] = up[k]; //k 아래 행의 윗 부분은 k 위 부분
            down[up[k]] = down[k]; //k 위 행의 아랫 부분은 k의 아래 부분
            k = n < down[k] ? up[k]:down[k];
        }
        //6. 가장 최근 삭제 행 복원
        else if(item[0] == 'Z'){
            const restore = deleted.pop();
            down[up[restore]] = restore; //resotre 기준 윗행의 다음과 아래행의 이전은 resotre가 되어야
            up[down[restore]] = restore;
        }
        //7. U또는 D를 사용해 현 위치를 위아래로 이동
        else{
            const [action,num] = item.split(' ');
            if(action == "U"){
                for(let i=0; i<num; i++){
                    k = up[k];
                }
            }else{
                for(let i=0; i<num; i++){
                    k=down[k];
                }
            }
        }
        
    }
    //8. 삭제된 행의 위치에 x 아니면 O반환
        const answer = new Array(n).fill("O");
        for (const i of deleted) {
            answer[i-1] = "X";
        }
        return answer.join("");
}