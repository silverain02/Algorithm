function solution(N, stages) {
    let answer = [];
    
    const personNum = stages.length;
    
    const stage_keys = Array.from({length:N},((_,i)=>i+1));
    
    let total = 0
    stage_keys.forEach((k)=>{
        const curStageNum = stages.filter(e=>e==k).length;
        const failRatio = curStageNum / (personNum-total);
        //실패율 계산
        answer.push([k,failRatio]);
        total += curStageNum;
    });
    
    return answer.sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
}