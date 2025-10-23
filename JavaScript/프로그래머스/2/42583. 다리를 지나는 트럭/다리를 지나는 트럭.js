function solution(bridge_length, weight, truck_weights) {
    let time=0; //흐른 시간
    let bridge = Array(bridge_length).fill(0); //다리 위 칸 (길이 만큼)
    let sum = 0; //다리 위 총 무게
    
    while(truck_weights.length>0||sum>0){
        time ++;
        //1. 다리 맨앞 트럭 내리기
        sum -= bridge.shift();
        
        //2. 다음트럭 올릴 수 있으면 올리기
        if(truck_weights.length>0 && sum+truck_weights[0] <= weight){
            let next = truck_weights.shift();
            bridge.push(next);
            sum += next;
        }else{
            bridge.push(0);//못 올리면 빈칸
        }
    }
    return time
}