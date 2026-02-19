function solution(board) {
    //1. DFS
    const N = board.length;
    const stack = [[0,0,0,-1]];
    let head = 0;
    const di = [-1,1,0,0];
    const dj = [0,0,-1,1];
    let result = Infinity;
    const map = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => Array(4).fill(Infinity))
    );

    while(stack.length !==0){
        const [vi,vj,vw,vk] = stack.pop()
        // console.log([vi,vj,vw,vk])
        if(vi==N-1 && vj==N-1) {
            result = Math.min(result,vw);
            continue
        }
        //이동
        for(let k=0; k<4; k++){
            const [ni,nj,nk] = [vi+di[k],vj+dj[k],k];
            let nw = vw+100;
            if(vk!==-1 && (((vk==0 || vk==1)&&(nk==2 || nk==3)) || ((nk==0 || nk==1)&&(vk==2 || vk==3)))){
                nw += 500;
            }
            if(ni>=0 && ni<N && nj>=0 && nj<N && nw<result && board[ni][nj]==0 && nw<=map[ni][nj][nk]){
                map[ni][nj][nk] = nw;
                stack.push([ni,nj,nw,nk]);
            }
        }
    }
    return result
}