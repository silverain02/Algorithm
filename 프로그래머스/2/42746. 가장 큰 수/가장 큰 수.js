function solution(numbers) {
    // 숫자를 문자열로 변환 후 정렬
    numbers.sort((a, b) => {
        let ab = String(a) + String(b);
        let ba = String(b) + String(a);
        return ba.localeCompare(ab); // 내림차순 정렬
    });
    
    // 정렬된 숫자를 문자열로 합치기
    let result = numbers.join('');
    
    // 모든 값이 0일 경우 "0" 반환
    return result[0] === '0' ? '0' : result;
}
