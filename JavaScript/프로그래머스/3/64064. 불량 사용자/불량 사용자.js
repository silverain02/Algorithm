function solution(user_id, banner_id){
    const possibleSets = new Set() //1. 가능한 모든 경우 저장 set
    //2. bannerId패턴과 일치하는 userId찾기 함수
    function isMatch(user,ban){
        if(user.length !== ban.length) return false
        for(let i=0;i<user.length;i++){
            if(ban[i]!=='*' && user[i]!==ban[i]) return false
        }
        return true
    }
    //3. 모든 가능한 조합을 찾는 재귀함수
    function findCombination(currentIndex,selectedUsers){
        if(currentIndex === banner_id.length){
            const sortedSelected =[...selectedUsers].sort().join(',')
            possibleSets.add(sortedSelected)
            return
        }
        //4. 현재 banner_id와 매칭되는 user_id들을 순화
        user_id.forEach(user=>{
            if(!selectedUsers.includes(user) && isMatch(user,banner_id[currentIndex]))
               {
                selectedUsers.push(user)
                findCombination(currentIndex+1,selectedUsers);
                selectedUsers.pop(); //백트래킹을 위한 pop
               }
        })
    }
    //5. 조합 찾기 시작
    findCombination(0,[]);
    return possibleSets.size;
}