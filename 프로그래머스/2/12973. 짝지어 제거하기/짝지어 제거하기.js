function solution(s)
{
    const stack = []
    //1. s 노드 순회
    for(let i=0; i<s.length; i++){
        const v = s[i];
        
        //1-1. stack pop/push 조건 체크
        if(stack.length>=1 && stack[stack.length-1]==v){
            stack.pop()
        }else{
            stack.push(v)
        }
    }
    return stack.length==0?1:0
}