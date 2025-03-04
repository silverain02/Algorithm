// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

//입력처리
const [N,M] = stdin[0].split(' ').map(Number);
const map = stdin.slice(1).map(line=>line.split(''))

//정답 배열 초기화
const result = Array.from({length:N},()=>Array(M).fill(-1))

//초기 구름 idx Set 설정
const cloudSet = new Set();
//배열 순회 O(N*M)
map.forEach((r,ri)=>{
    r.forEach((e,ci)=>{
        if(e=='c') cloudSet.add(`${ri} ${ci} 0`); //i j depth
    })
})

//cloud가 없어질 때까지
while(cloudSet.size>0){
    //현 노드 처리
    for(let v of cloudSet){
        let [i,j,depth] = v.split(' ').map(Number);
        if(result[i][j]==-1) result[i][j] = depth; //result에 찍기
        cloudSet.delete(v); //우선 현 노드 삭제

        //노드 벗어나지 않으면 새 노드 추가
        if(j<M-1){
            const newV = `${i} ${++j} ${++depth}`
            cloudSet.add(newV);
        }
    }
}
//출력 처리
result.forEach(r=>{
    console.log(r.join(' '))
})