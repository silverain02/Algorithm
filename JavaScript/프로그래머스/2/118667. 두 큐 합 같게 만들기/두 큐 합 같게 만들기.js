function solution(queue1, queue2) {
    const sum1 = queue1.reduce((acc,cur)=> acc+cur,0); //1. queue1의 합
    const sum2 = queue2.reduce((acc,cur)=> acc+cur,0); //2. queue2의 합
    const totalSum = sum1+sum2;
    
    if(totalSum%2 !==0) return -1 //2. 총합이 홀수면 불가
    
    const targetSum = totalSum/2; 
    const combinedQueue = [...queue1,...queue2] //3. 두 큐를 결합
    
    let currentSum = sum1;
    let left = 0;
    let right = queue1.length;
    const maxMoves = queue1.length *3; // 최대 이동 횟수
    
    for (let moves =0; moves<maxMoves; moves++){
        if(currentSum === targetSum) return moves; // 5. 두 큐의 합이 같아지면 이동횟수 반환
        if(currentSum > targetSum) {
            currentSum -= combinedQueue[left++]; //5. left 포인터 이도 이동 : 큐에서 원소 제거
        }else{
            currentSum += combinedQueue[right++ % combinedQueue.length]; //6. right 포인터 이동: 큐에 원소 추가
        }
    }
    return -1; // 모든 경우 시도했으나 두큐의 합이 같아지지 않은 경우
}
