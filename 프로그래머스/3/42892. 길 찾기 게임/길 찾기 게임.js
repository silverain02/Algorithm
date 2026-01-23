//1. Node 크래스 정의
class Node {
        constructor(info, num, left=null, right=null){
            this.info = info; //노드의 좌표 정보 저장
            this.left = left; //노드의 왼쪽 자식 노드
            this.right = right; //노드의 오른쪽 자식 노드
            this.num = num; //노드의 번호
        }
        //2.왼쪽 자식 노드가 있는 지 확인하는 함수
        hasLeft() {return this.left !== null};
        //3. 오른쪽 자식노드가 있는 지 확인하는 함수
        hasRight() {return this.right !== null};
}
//4. 이진 트리 생성 함수
function makeBT(nodeinfo){
        //5. 노드의 번호 배열 생성
        const nodes = Array.from({length:nodeinfo.length},(_,i)=>i+1);
        nodes.sort((a,b)=>{
            const [ax,ay] = nodeinfo[a-1];
            const [bx,by] = nodeinfo[b-1];
            return ay==by?ax-bx:by-ay;
        })
        
        let root =null;
        for (const node of nodes){
            if(!root) {
                root = new Node(nodeinfo[node-1],node);
            }else{
                let parent = root;
                const newNode = new Node(nodeinfo[node-1],node);
                while(true){
                    //6. 부모 노드의 x좌표가 더 크면 왼쪽
                    if(newNode.info[0] < parent.info[0]){
                        if(parent.hasLeft()){
                            parent = parent.left;
                            continue;
                        }
                        parent.left = newNode;
                        break;
                    }else{
                        //7. 부모 노드의 x좌표가 더 작거나 같으며 오른쪽
                        if(parent.hasRight()){
                            parent = parent.right;
                            continue;
                        }
                        parent.right = newNode;
                        break;
                    }
                }
            }
        }
    return root;
}

//8.전위 순회 함수
function preOrder(root,answer){
    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        if(!node) continue;
        answer[0].push(node.num);
        stack.push(node.right);
        stack.push(node.left);
    }
}

//9. 후위 순회 함수
function postOrder(root,answer){
    const stack = [[root,false]];
    while(stack.length){
        const [node,visited] = stack.pop();
        if(!node) continue;
        if(visited){
            answer[1].push(node.num);
        }else{
            stack.push([node,true]);
            stack.push([node.right,false]);
            stack.push([node.left, false]);
        }
    }
}

function solution(nodeinfo){
    const answer = [[],[]]
    const root = makeBT(nodeinfo);
    preOrder(root,answer);
    postOrder(root,answer);
    return answer
}