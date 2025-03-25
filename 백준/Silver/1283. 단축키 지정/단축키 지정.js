const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const words = input.slice(1);

function assignShortcuts(words) {
    const usedShortcuts = new Set();
    const shortcutIndices = [];

    // 첫 글자 단축키 우선 탐색
    for (let i = 0; i < words.length; i++) {
        const wordParts = words[i].split(' ');
        let shortcutFound = false;

        // 각 단어의 첫 글자 탐색
        for (let j = 0; j < wordParts.length; j++) {
            const firstChar = wordParts[j][0].toLowerCase();
            if (!usedShortcuts.has(firstChar)) {
                usedShortcuts.add(firstChar);
                shortcutIndices.push(j === 0 ? 0 : words[i].split(' ').slice(0, j).join(' ').length + 1);
                shortcutFound = true;
                break;
            }
        }

        // 첫 글자 단축키 실패 시 전체 문자 탐색
        if (!shortcutFound) {
            for (let j = 0; j < words[i].length; j++) {
                const char = words[i][j];
                if (char !== ' ' && !usedShortcuts.has(char.toLowerCase())) {
                    usedShortcuts.add(char.toLowerCase());
                    shortcutIndices.push(j);
                    shortcutFound = true;
                    break;
                }
            }
        }

        // 단축키를 찾지 못한 경우
        if (!shortcutFound) {
            shortcutIndices.push(-1);
        }
    }

    // 단축키 표시
    return words.map((word, index) => {
        if (shortcutIndices[index] === -1) return word;
        const chars = word.split('');
        chars[shortcutIndices[index]] = `[${chars[shortcutIndices[index]]}]`;
        return chars.join('');
    });
}

const result = assignShortcuts(words);
console.log(result.join('\n'));