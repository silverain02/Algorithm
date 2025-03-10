function solution(N, stages) {
    let answer = [];
    
    const personNum = stages.length;
    console.log(personNum,'명의 사람 존재')
    
    const stage_keys = Array.from({length:N},((_,i)=>i+1));
    console.log('스테이지배열',stage_keys)
    
    let total = 0
    stage_keys.forEach((k)=>{
        const curStageNum = stages.filter(e=>e==k).length;
        const failRatio = curStageNum / (personNum-total);
        //실패율 계산
        console.log('현 스테이지: ',k, '실패율은 ', curStageNum / (personNum-total));
        answer.push([k,failRatio]);
        total += curStageNum;
    });
    
    //소팅
    console.log('결론', answer.sort((a,b)=>b[1]-a[1]).map(e=>e[0]))
    
    return answer.sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
}