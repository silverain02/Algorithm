function solution(s) {
    let [zeroCnt,converCnt] = [0,0];
    
    while(s!=='1'){
        converCnt++
        //0제거
        const arr = s.split('').filter(e=>e!=='0')
        zeroCnt += s.length - arr.length
        
        //2진수 전환
        s = arr.length.toString(2)
    }
    
    return [converCnt,zeroCnt]
    
}