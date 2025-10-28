function solution(expression) {
    //1. exp에서 연산자 추출
    const exp_arr = [];
    const arr = ["*","-","+"];
    for(let elem of arr){
        if(expression.includes(elem)){
            exp_arr.push(elem)
        }
    }
    
    //2. 가능 우선순위 리스트업
    let ord_arr = [];
    const n = exp_arr.length;
    switch(n){
        case 1:
            ord_arr.push(exp_arr.slice())
            break;
        case 2:
            ord_arr.push(exp_arr.slice());
            ord_arr.push(exp_arr.slice().reverse());
            break;
        case 3:
            ord_arr =[["*","-","+"],["*","+","-"],
                      ["+","-","*"],["+","*","-"],
                      ["-","+","*"],["-","*","+"]]
            break;
    }
    
    //3. str 전환
    let temp = ''
    const arr2 = []
    for(char of expression){
        if(exp_arr.includes(char)){
            arr2.push(Number(temp))
            temp = ''
            arr2.push(char)
        }else{
            temp += char
        }
    }
    arr2.push(Number(temp))
    
    //4. ord_arr돌며 max값 찾기
    let answer = 0;
    ord_arr.forEach((ord)=>{
        const arr3 = arr2.slice()
        // console.log('#1',ord, arr3)
        ord.forEach((o)=>{
            // console.log('#2',o,arr3)
            while(arr3.includes(o)){
                let t = arr3.indexOf(o);
                if(o=="*"){
                    arr3.splice(t-1,3,arr3[t-1]*arr3[t+1])
                } else if(o=="+"){
                    arr3.splice(t-1,3,arr3[t-1]+arr3[t+1])
                } else if(o=="-"){
                    arr3.splice(t-1,3,arr3[t-1]-arr3[t+1])
                } 
            }
            // console.log('#3',arr3)
        })
        // console.log('--',ord,arr3)
        answer = Math.max(answer,Math.abs(arr3[0]))
    })
    return answer
}