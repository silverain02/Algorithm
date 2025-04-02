//큐 구현
class Queue{
    item = []
    front = 0;
    rear = 0;
    
    push(item){
        this.item.push(item);
        this.rear++;
    }
    pop(){
        return this.item[this.front++]
    }
    isEmpty(){
        return this.front === this.rear
    }
}

function solution(cards1, cards2, goal) {
    const queue1 = new Queue(cards1)
    const queue2 = new Queue(cards2)
    for(c of cards1) queue1.push(c)
    for(c of cards2) queue2.push(c)
    
    //초기화
    let [c1,c2] = [queue1.pop(),queue2.pop()]
    //goal돌기
    for(let i=0; i<goal.length; i++){
        const target=goal[i]
        console.log('찾고있어요',target)
        //c1확인
        if(target==c1){
            //c1업데이트
            console.log('c1',c1,queue1)
            c1 = queue1.pop();
        }else if( target==c2){
            console.log('c2',c2,!queue2.isEmpty(),queue2)
            c2 = queue2.pop();
            console.log('c2 update',c2,!queue2.isEmpty(),queue2)
        }else{
            //만들 수 없음
            return "No"
        }
    }
    return "Yes"
}