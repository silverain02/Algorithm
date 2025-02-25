// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

//큐 로직

//입력처리
const t = Number(stdin.shift());
for (let i=0; i<t; i++){
    const [n,target] = stdin.shift().split(' ').map(Number)
    const q = stdin.shift().split(' ').map((e,idx)=>[Number(e),idx])

    // console.log('케이스 시작',t,q)

    //큐 로직
    let depth = 0
    while(true){
        const v = q.shift()
        
        //뒤로 보내기
        if(Math.max(...q.map((e)=>e[0])) > v[0]){
            q.push(v)
            // console.log('뒤로가',v,q)
        }else{
            //가장 큰 값
            depth ++
            // console.log('사라져')
            //타겟 여부 확인
            if(v[1]==target){
                console.log(depth)

                // console.log('케이스 끝',q,v,depth+1)
                break;
            }
        }
    }
}