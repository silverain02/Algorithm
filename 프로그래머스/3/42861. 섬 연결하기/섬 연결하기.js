function find(parent,i){
    //1. i가 속한 집합의 루트 노드 찾기
    if(parent[i]==i) return i
    //2. 경로 압축: i의 부모를 직접 루트로 설정
    parent[i]=find(parent,parent[i])
    return parent[i];
}

function union(parent,rank,x,y){
    //3. 랭크를 기준으로 합치기
    const xroot = find(parent,x);
    const yroot = find(parent,y);
    
    if(rank[xroot]<rank[yroot]){
        //작은 랭크의 트리를 큰 랭크의 트리 아래로 연결
        parent[xroot]=yroot;
    }else if(rank[xroot]>rank[yroot]){
        parent[yroot]=xroot;
    }else{
        //랭크가 같다면 한 트리를 다른 트리에 붙이고 랭크 증가
        parent[yroot]=xroot;
        rank[xroot]+=1;
    }
}

function solution(n, costs) {
    //비용을 기준으로 간선을 오름차순 정렬
    costs.sort((a,b)=>a[2]-b[2]);
    
    //각 노드의 부모를 추적하는 parent 배열 생성
    const parent = Array.from({length:n},(_,i)=>i);
    
    //각 노드의 트리의 랭크를 추적하는 rank 배열 생성
    const rank = Array(n).fill(0);
    
    let minCost = 0; //최소 신장 트리의 총 비용
    let edges = 0; //최소 신장 트리에 포함된 간선의 개수
    
    for (const edge of costs){
        if(edges == n-1){
            //n-1개의 간선이 포함된 경우 중단(최소 신장 트리의 속성)
            break;
        }
        
        //현재 간선의 두 노드가 속한 집합의 루트 찾기
        const x = find(parent,edge[0]);
        const y = find(parent,edge[1]);
        
        if(x!==y){
            //두 노드가 서로 다른 집합에 속하는 경우, 집합 합치기
            union(parent,rank,x,y);
            //현재 간선의 비용을 최소비용에 추가
            minCost += edge[2];
            //포함된 간선의 개수 증가
            edges += 1
        }
    }
    
    return minCost
}