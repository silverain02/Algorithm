function solution(s){
    //stack 처리
    const stack = []
    
    //돌기
    for(let v of s){
        stack.push(v);
        const n = stack.length;
        if(n>1&&stack[n-1]==')'&&stack[n-2]=="("){
            stack.pop();
            stack.pop();
        }
    }
    
    if(stack.length==0){
        return true
    }
    return false;
}