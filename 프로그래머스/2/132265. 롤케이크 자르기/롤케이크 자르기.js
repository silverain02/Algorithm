function solution(topping) {
    let result = 0;

    const left = new Map();   // 누적된 왼쪽 토핑 종류 수
    const right = new Map();  // 전체 토핑 종류 수 (초기화)

    for (const t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }

    for (const t of topping) {
        // 왼쪽에 하나 추가
        left.set(t, (left.get(t) || 0) + 1);

        // 오른쪽에서 하나 제거
        right.set(t, right.get(t) - 1);
        if (right.get(t) === 0) right.delete(t);

        // 종류 수 비교
        if (left.size === right.size) result++;
    }

    return result;
}
