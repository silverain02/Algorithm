function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let result = 0;
    let rotated = s;
    
    for (let i = 0; i < s.length; i++) {
        if (isValid(rotated)) {
            result++;
        }
        rotated = rotated.slice(1) + rotated[0]; // 왼쪽으로 회전
    }
    
    return result;
}
