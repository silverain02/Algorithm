function solution(sticker) {
  const N = sticker.length;
  if (N === 1) return sticker[0];

  // case1: 0번을 포함 → N-1 사용 불가 (범위: 0..N-2)
  const dp1 = new Array(N).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = Math.max(sticker[0], sticker[1]);
  for (let i = 2; i < N - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }
  const ans1 = dp1[N - 2];

  // case2: 0번을 제외 → N-1 사용 가능 (범위: 1..N-1)
  const dp2 = new Array(N).fill(0);
  dp2[1] = sticker[1];
  for (let i = 2; i < N; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }
  const ans2 = dp2[N - 1];

  return Math.max(ans1, ans2);
}
