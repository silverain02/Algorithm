// 입력을 받아오기 위해 아래 두 줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const n = Number(stdin[0]);
const words = stdin.slice(1);

function isGoodWord(word) {
    const stack = [];

    for (let char of word) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 짝이 맞으면 제거
        } else {
            stack.push(char); // 짝이 아니면 스택에 추가
        }
    }

    return stack.length === 0; // 스택이 비어 있으면 좋은 단어
}

let count = 0;
for (let word of words) {
    if (isGoodWord(word)) count++;
}

console.log(count);
