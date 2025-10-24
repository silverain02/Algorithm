function solution(word) {
    //하드코딩 규칙
    const alp = ['A','E','I',"O","U"]
    const arr =[781,156,31,6,1];
    let answer = 0;
    answer += word.length;
    
    for(let i=0; i<word.length; i++){
        const diff = arr[i] * alp.indexOf(word[i]) +1
        answer += arr[i]* alp.indexOf(word[i]) 
    }
    return answer
}