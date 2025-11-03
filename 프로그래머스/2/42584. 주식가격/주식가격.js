function solution(prices) {
    const N = prices.length;
    const answer = new Array(N).fill(0);
    const stack = [];

    for (let i = 0; i < N; i++) {
        // 현재 가격이 이전 가격보다 떨어졌을 때
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }

    // 끝까지 안 떨어진 경우 처리
    while (stack.length) {
        const top = stack.pop();
        answer[top] = N - 1 - top;
    }
    return answer;
}
