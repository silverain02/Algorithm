function solution(phone_book) {
    phone_book.sort(); //전화번호부 정렬
    //전화번호부에서 연속된 두개의 전화번호 비교
    for(let i =0;i<phone_book.length-1;i++){
        if(phone_book[i+1].startsWith(phone_book[i])) return false;
    }
    //모든 전화번호 비교 후 반환되지 않았다면, 접두어가 없으므로 true
    return true
}