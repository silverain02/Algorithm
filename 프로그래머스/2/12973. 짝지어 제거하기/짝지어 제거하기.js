function solution(s){
	const stack = [];
	
	for(const c of s){
		//스택이 비어있지 않고 현재 문자와 스택의 맨 위 문자가 같으면
		if(stack.length>0 && stack[stack.length-1]==c){
			stack.pop(); //스택의 맨 위 문자 제거
		}else{
			stack.push(c); //스택에 현 문자 추가
		}
	}
	return stack.length ===0?1:0;
}