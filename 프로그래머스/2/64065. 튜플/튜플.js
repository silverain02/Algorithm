function solution(s) {
    const set = new Set();
    let arr = s.substr(1,s.length-2).split('}');
    arr.pop()
    arr = arr.map((e,idx)=>{
        if(idx==0) return e.substr(1,e.length-1).split(',').map(Number)
        else return e.substr(2,e.length-1).split(',').map(Number)
    })
    
    // console.log(arr)
    //len기준 정렬
    arr.sort((a,b)=>a.length-b.length)
    // console.log(arr)
    
    const result = []
    arr.forEach(e=>{
        e.forEach(char=>{
            if(!result.includes(char)) result.push(char)
        })
    })
    
    // console.log(result)
    return result
}