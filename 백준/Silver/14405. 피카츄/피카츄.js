function main(){
    // 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
    const fs = require('fs');
    const target = fs.readFileSync('/dev/stdin').toString().trim();

    let i = 0;
    while (i < target.length) {
        if (target.startsWith("pi", i)) {
            i += 2;
        } else if (target.startsWith("ka", i)) {
            i += 2;
        } else if (target.startsWith("chu", i)) {
            i += 3;
        } else {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

main();
