const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

function solve(n, s) {
    // 최소 이동 횟수를 무한대로 초기화
    let minMoves = Infinity;
    
    // R과 B의 개수 세기
    const rCount = s.split('R').length - 1;
    const bCount = s.split('B').length - 1;
    
    // 모든 색상이 같은 경우 0 반환
    if (rCount === n || bCount === n) {
        return 0;
    }
    
    // 모든 가능한 분할 지점 확인
    for (let i = 0; i <= n; i++) {
        // 왼쪽과 오른쪽으로 분할
        const left = s.slice(0, i);
        const right = s.slice(i);
        
        // 왼쪽을 R로, 오른쪽을 B로 만드는 경우
        const rLeft = left.split('R').length - 1;
        const bRight = right.split('B').length - 1;
        const movesRB = (left.length - rLeft) + (right.length - bRight);
        
        // 왼쪽을 B로, 오른쪽을 R로 만드는 경우
        const bLeft = left.split('B').length - 1;
        const rRight = right.split('R').length - 1;
        const movesBR = (left.length - bLeft) + (right.length - rRight);
        
        // 최소 이동 횟수 업데이트
        minMoves = Math.min(minMoves, movesRB, movesBR);
    }
    
    return minMoves;
}

// 입력 처리
const n = parseInt(stdin[0]);
const s = stdin[1];

// 결과 출력
console.log(solve(n, s));