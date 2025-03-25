// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

const n = Number(stdin[0]);
const words = stdin.slice(1);
// console.log(n,words)

//초기화
const set = new Set();
const stack = [];

//단어 순환
words.forEach(word=>{
    // console.log([...set],word);
    const word_arr = word.split(' ');
    // console.log(word_arr);
    //단어 단위 순환
    let isValid = false;
    for(let i=0; i<word_arr.length; i++){
        // console.log(word_arr[i]);
        const w = word_arr[i];
        // console.log(w[0])
        if(!set.has(w[0].toLowerCase())){
            set.add(w[0].toLowerCase());
            // console.log(w[0].toLowerCase())
            if(i==0) stack.push(0)
            else stack.push(word_arr.slice(0,i).join().length+1);
            // console.log(word_arr.slice(0,i).join().length)
            isValid = true
            break;
        }
    }
    if(!isValid){
        // console.log("땡", word);
        //전체 탐색
        for(let j=0;j<word.length; j++){
            // console.log(word[j])
            if(word[j]!==' '&&!set.has(word[j].toLowerCase())){
                set.add(word[j].toLowerCase());
                stack.push(j);
                isValid = true
                break;
            }
        }
    }
    if(!isValid) stack.push(-1)
})
// console.log('최종',stack)
    // 출력 처리
    let t = 0
    words.forEach(w=>{
        const arr = w.split('');
        if(stack[t]!== -1) arr[stack[t]] = `[${arr[stack[t]]}]`
        console.log(arr.join(''))
        t++
    })
