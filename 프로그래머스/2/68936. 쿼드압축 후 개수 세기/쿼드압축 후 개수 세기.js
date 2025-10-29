function solution(arr) {
    //초기화
    const cnt = [0,0];
    function isAll(arr){
        let k = -1;
        const n = arr.length;
        for(let i=0; i<n; i++){
            let new_k = -1;
            const t = arr[i]
            if(t.includes(0) && !t.includes(1)){
                new_k = 0;
            }else if(t.includes(1) && !t.includes(0)){
                new_k = 1;
            }else{
                return [false,-1]
            }
            if(k!==-1 && k!==new_k){
                return [false,-1]
            }
            k = new_k
        }
        return [true,k]
    }
    // let r = 0
    function iter(arr){
        // console.log('#',r,' iter ',arr)
        // r++;
        const n = arr.length;
        const [valid,k] = isAll(arr);
        if(valid){
            // console.log('-- 합치기 ',k)
            if(k==0) cnt[0]++;
            else cnt[1]++;
            return
        }
        // console.log('-- 쪼개기')
        
        for(let i=0;i<4;i++){
            let block = null
            if(i==0){
                block = arr.slice(0,n/2)
                for(let i=0; i<block.length;i++){
                    block[i] = block[i].slice(0,n/2)
                }
                iter(block);
            }else if(i==1){
                block = arr.slice(0,n/2)
                for(let i=0; i<block.length;i++){
                    block[i] = block[i].slice(n/2,n)
                }
                // console.log('1사분면',block)
                iter(block);
            }else if(i==2){
                block = arr.slice(n/2,n)
                for(let i=0; i<block.length;i++){
                    block[i] = block[i].slice(0,n/2)
                }
                // console.log('2사분면',block)
                iter(block);
            }else if(i==3){
                block = arr.slice(n/2,n)
                for(let i=0; i<block.length;i++){
                    block[i] = block[i].slice(n/2,n)
                }
                // console.log('3사분면',block)
                iter(block);
            }
            // console.log('for문 끝',i)
        }
    }
    iter(arr)
    return cnt;
}