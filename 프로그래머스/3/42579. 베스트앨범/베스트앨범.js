function solution(genres, plays) {
    let answer = [];
    
    //해시맵 구성
    const map = new Map();
    for(let i=0;i<genres.length;i++){
        const [g,p,idx] =[genres[i],plays[i],i]
        if(!map.has(g)) {
            map.set(g, new Map([
                ['list', new Map()],
                ['sum', 0]
            ]));    

        }
        map.get(g).get('list').set(idx,p)
        const sumElem = map.get(g).get('sum')
        map.get(g).set('sum', sumElem + p);
    }
    
    //map을 정렬
    const sortedMap = new Map([...map].sort((a,b)=>b[1].get('sum') - a[1].get('sum')))
    
    //장르 순환
    sortedMap.forEach((v,k)=>{
        const sortedSongs = [...v.get('list')].sort((a,b)=>b[1]-a[1]).slice(0,2)
        answer = [...answer, ...sortedSongs.map(e=>e[0])]
    })
    return answer;
}