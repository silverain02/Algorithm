function solution(n,k,cmd){
	//삭제된 행의 인덱스를 저장하는 배열
	const deleted = [];
	
	//연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
	const up = [...new Array(n+2)].map((_,i)=>i-1);
	const down = [...new Array(n+1)].map((_,i)=>i+1);
	
	//현재 위치를 나타내는 인덱스
	k += 1;
	
	//주어진 명령어 배열 요소를 하나씩 처리
	for (const item of cmd){
		//현재위치를 삭제하고 그 다음 위치로 이동
		if(item[0] =="C"){
			deleted.push(k);
			up[down[k]] = up[k];
			down[up[k]] = down[k];
			k = n < down[k] ? up[k] : down[k];
		}
		
		//가장 최근에 삭제된 행을 복원
		else if(item[0]=='Z'){
			const restore = deleted.pop();
			down[up[restore]] = restore;
			up[down[restore]] = restore;
		}
		
		//U또는 D를 사용해 현재 위치를 위 아래로 이동
		else{
			const [action,num] = item.split(" ");
			if(action =="U"){
				for(let i=0; i<num; i++){
					k = up[k];
				}
			} else{
				for(let i=0; i<num; i++){
					k = down[k]
				}
			}
		}
	}
	
	//삭제된 행은 x아니면 O
	const answer = new Array(n).fill("O");
	for (const i of deleted){
		answer[i-1]="X";
	}
	return answer.join("");
}