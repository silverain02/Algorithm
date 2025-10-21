function solution(queue1, queue2) {
  const total = [...queue1, ...queue2];
  const n = queue1.length;
  
  let sum1 = queue1.reduce((a,b)=>a+b,0);
  let sum2 = queue2.reduce((a,b)=>a+b,0);
  const target = (sum1 + sum2) / 2;
  
  // 불가능한 경우
  if ((sum1 + sum2) % 2 !== 0) return -1;

  let i = 0; // queue1 포인터
  let j = n; // queue2 포인터 (total 기준)
  let cnt = 0;

  while (i < total.length && j < total.length && cnt <= n * 3) {
    if (sum1 === target) return cnt;
    if (sum1 > target) {
      sum1 -= total[i++];
    } else {
      sum1 += total[j++];
    }
    cnt++;
  }

  return -1;
}
