function solution(n, k) {
    const str = n.toString(k)
    function isPrime(num) {
      num = Number(num);
      if (num < 2) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      const sqrt = Math.sqrt(num);
      for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
    //1. 후보 모으기
    const arr = [];
    let s = 0;
    let result = 0;
    for(let i=0; i<str.length; i++){
        if(i==str.length-1){
            t=str.split('').slice(s,i+1)
            if(t.length!==0 && isPrime(t.join(''))) {
                result ++;
            }
        }
        if(str[i]==0){
            t=str.split('').slice(s,i)
            if(t.length!==0 && isPrime(t.join(''))){
                result ++;
            }
            s=i+1
        }
    }
    return result
}