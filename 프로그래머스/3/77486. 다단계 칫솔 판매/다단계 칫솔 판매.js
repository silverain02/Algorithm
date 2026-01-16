function solution(enroll, referral, seller, amount) {
  //1. 해시맵 초기화 O(N)
  const map = new Map();
  const tree = new Map();

  enroll.forEach((e, idx) => {
    tree.set(e, referral[idx]);
    map.set(e, 0);
  });
  tree.set("-", null);
  map.set("-", 0);

  //2. seller 순회 O(M)
  seller.forEach((s, idx) => {
    //2-1. tree확인
    let price = amount[idx] * 100;
    let v = s;
    let parent = tree.get(v);
      
    while (parent !== null) {
        //10퍼 버림
        const passUp = Math.floor(price*0.1);
        const keep = price - passUp;
        
        map.set(v,map.get(v)+keep);
        
        if(passUp<1) break;
        
        
        v = parent;
        price = passUp;
        parent = tree.get(v);
    }
    if(parent==null) map.set(v, map.get(v) + price);
  });

  //3. map -> result 전환
  const result = [];
  enroll.forEach((e) => {
    result.push(map.get(e));
  });
    return result
}
