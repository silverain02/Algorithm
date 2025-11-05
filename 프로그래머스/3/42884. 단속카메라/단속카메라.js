function solution(routes) {
    //1. 첫지점 기준 sort 
    routes.sort((a,b)=>a[0]-b[0]);
    //2.완탐
    let arr = [];
    let answer = 0;
    routes.forEach((r,idx)=>{
        // console.log("#1",r)
        const [s,e] = r;
        if(arr.length==0){
            arr = [s,e];
        }else{
            if(s>arr[1]){
                answer++;
                arr = [s,e]
            }

            if(s>arr[0]) arr[0]=s;
            if(arr[1]>e) arr[1]=e;
        }
    })
    if(arr.length !== 0) answer ++;
    return answer
}