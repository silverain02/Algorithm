function solution(strings, n) {
    //n기준 sorting 오름차순
    strings.sort((a,b)=>{
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] == b[n]) {
            if(a>b) return 1;
            else return -1;
        };
    })
    return strings
}