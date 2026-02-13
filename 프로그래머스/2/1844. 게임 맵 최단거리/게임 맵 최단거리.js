function solution(maps) {
    //1. N,M구하기
    const [N,M] = [maps.length, maps[0].length];
    //2. BFS 돌리기
    const queue = [[0,0,1]];
    const visited = new Set();
    visited.add('0,0')
    let head = 0;
    const di = [-1,1,0,0];
    const dj = [0,0,-1,1];
    let minT = Infinity;
    while(head<queue.length){
        //pop
        const v = queue[head];
        //도착 확인
        // console.log('target:',v)
        if(v[0]==N-1 && v[1]==M-1) return v[2];
        head++;
        //이동
        for(let k=0; k<4; k++){
            const [ni,nj,nt] = [v[0]+di[k],v[1]+dj[k],v[2]+1]
            if(ni>=0 && ni<N && nj>=0 && nj<M && maps[ni][nj]==1 && !visited.has([ni,nj].join(',')) ){
                queue.push([ni,nj,nt])
                visited.add([ni,nj].join(','))
            }
        }
    }
    return -1;
}