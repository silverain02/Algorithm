function solution(rectangle, characterX, characterY, itemX, itemY) {
    //1. 가능 경로 set 만들기
    const edge = new Map();
    const set = new Set();
    let [max_x,max_y] = [0,0]
    
    rectangle.forEach((r)=>{
        const [px,py,nx,ny] = r;
        max_x = Math.max(max_x,nx);
        max_y = Math.max(max_y,ny);
        // console.log('#1',r)
        for(let x=px; x<=nx; x++){
            for(let y=py; y<=ny; y++){
                const str = [x,y].join(',')
                // console.log(str)
                if(!set.has(str)){
                    if((x==px || x==nx || y==py || y==ny)) edge.set(str,true);
                    else edge.set(str,false)
                    set.add(str);
                }
            }
        }
    })
    // console.log('@@')
    // console.log(edge)
    
    //2. BFS+weighted
    const queue = [[characterX,characterY,0]]
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const visited = new Set();
    while(queue.length!==0){
        const [x,y,w]=queue.shift();
        visited.add([x,y].join(','))
        // console.log(x,y,w)
        if(x==itemX && y==itemY){
            // console.log('--',x,y,w)
            return w
        }else{
            // console.log(x,y,w)
        }
        for(let i=0; i<4; i++){
            const [nx,ny,nw] = [x+dx[i],y+dy[i],w+1]
            const str = [nx,ny].join(',')
            if(nx>=0 && ny>=0 && nx<=max_x && ny<=max_y && set.has(str) && edge.get(str) && !visited.has(str)){
                queue.push([nx,ny,nw])
            }
        }
    }
}