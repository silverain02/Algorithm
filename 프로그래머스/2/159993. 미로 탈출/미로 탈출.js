function solution(maps) {
    //1. S,L위치 찾기 O(N*2)
    const [n,m] = [maps.length,maps[0].length]
    const map = new Map()
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            const v = maps[i][j]
            if(v == 'S') map.set('S',[i,j].join(','))
            else if(v == 'L') map.set('L',[i,j].join(','))
            else if(v == 'E') map.set('E',[i,j].join(','))
        }
    }
    let [dist1,dist2] = [0,0];
    const di = [-1,1,0,0]
    const dj = [0,0,-1,1]
    let visited = new Array(n).fill().map(_=>new Array(m).fill(0))
    //2. S->L 이동
    let head = 0;
    let queue = [map.get('S')+',0'];
    const lv = map.get('L').split(',');
    while(head < queue.length){
        // v확인
        let v = queue[head++].split(',').map(t=>Number(t));
        if(v[0] == lv[0] && v[1] == lv[1]){
            dist1 += v[2]
            break;
        }
        
        //다음 이동
        for(let k=0; k<4; k++){
            const nv = [v[0]+di[k],v[1]+dj[k],v[2]+1];
            if(nv[0]<n && nv[0]>=0 && nv[1]<m && nv[1]>=0 && maps[nv[0]][nv[1]]!=='X' && visited[nv[0]][nv[1]]==0){
                //이동 가능
                visited[nv[0]][nv[1]] = 1;
                queue.push(nv.join(','))
            }
        }
    }
    
    if(dist1 == 0) return -1
    //3. L->E이동
    visited = new Array(n).fill().map(_=>new Array(m).fill(0));
    
    queue = [map.get('L')+',0'];
    head = 0
    const ev = map.get('E').split(',');
    while(head<queue.length){
        // v확인
        let v = queue[head++].split(',').map(t=>Number(t));
        if(v[0] == ev[0] && v[1] == ev[1]){
            dist2 += v[2]
            break;
        }
        
        //다음 이동
        for(let k=0; k<4; k++){
            const nv = [v[0]+di[k],v[1]+dj[k],v[2]+1];
            if(nv[0]<n && nv[0]>=0 && nv[1]<m && nv[1]>=0 && maps[nv[0]][nv[1]]!=='X' && visited[nv[0]][nv[1]]==0){
                //이동 가능
                visited[nv[0]][nv[1]] = 1;
                queue.push(nv.join(','))
            }
        }
    }
    
    if(dist2 == 0) return -1
    else return dist1+dist2
    
}