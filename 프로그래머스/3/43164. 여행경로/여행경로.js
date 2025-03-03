function solution(tickets) {
    // 1️⃣ 티켓을 사전순 정렬 (그래야 정답이 가장 먼저 나옴)
    tickets.sort();

    // 2️⃣ 그래프를 Map 형태로 변환
    const map = new Map();
    tickets.forEach(([from, to]) => {
        if (!map.has(from)) map.set(from, []);
        map.get(from).push(to);
    });

    // 3️⃣ DFS를 반복문 (스택)으로 구현
    let stack = ["ICN"];
    let path = [];

    while (stack.length > 0) {
        let top = stack[stack.length - 1];

        if (map.has(top) && map.get(top).length > 0) {
            stack.push(map.get(top).shift());  // 가장 작은 값(사전순)부터 방문
        } else {
            path.push(stack.pop());  // 더 갈 곳이 없으면 경로에 추가
        }
    }

    return path.reverse();  // 경로를 역순으로 반환
}
