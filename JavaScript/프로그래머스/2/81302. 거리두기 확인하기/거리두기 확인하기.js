function solution(places) {
    const di =[-1,1,0,0]
    const dj =[0,0,-1,1]
    function dfs(i,j,place){
        let visited = new Array(5).fill().map(_=> new Array(5).fill(0));
        const stack = [[i,j,1]];
        while(stack.length){
            let [vi,vj,vl] = stack.pop();
            if(!visited[vi][vj] && vl<=2){
                visited[vi][vj]=true;
                for(let t=0; t<4; t++){
                    let [ni,nj,nl] = [vi+di[t],vj+dj[t],vl+1];
                    if(ni>=0 && nj>=0 && ni<=4 && nj<=4 && !visited[ni][nj]){
                        if(place[ni][nj]=='O'){
                            stack.push([ni,nj,nl])
                        }else if(place[ni][nj]=='P'){
                            return false
                        }
                    }
                }
            }
        }
        return true
    }
    function iter(place){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                let t = place[i][j]
                if(t=='P'){
                    if(!dfs(i,j,place)){
                        return 0;
                    }
                }
            }
        }
        return 1;
    }
    let answer = [];
    places.forEach((place)=>{
        answer.push(iter(place))
    })
    return answer
}