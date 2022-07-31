#실전10-3
import sys
input = sys.stdin.readline

#특정 원소가 속한 집합을 찾기
def find_parent(parent,x):
    #루트 노드가 아니라면,루트노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        parent[x] = find_parent(parent,parent[x])
    return parent[x]
#두 원소가 속한 집합을 합치기
def union_parent(parent,a,b):
    a=find_parent(parent,a)
    b=find_parent(parent,b)
    if a<b:
        parent[b]=a
    else:
        parent[a]=b
        
#노드의 개수와 간선의 개수 입력받기
n,m=map(int,input().split())

parent=[0]*(n+1)#부모 테이블 초기화
#모든 간선을 담을 리스트와 최종비용을 담을 변수
edges=[]
result=0
#부모테이블상에서,부모를 자기자신으로 초기화
for i in range(1,n+1):
    parent[i]=i
    
#모든 간선에 대한 정보 입력받기
for _ in range(m):
    a,b,cost=map(int,input().split())
    #비용순으로 정렬하기 위해서 튜플의 첫번쨰 원소를 비용으로 설정
    edges.append((cost,a,b))
#간선을 비용순으로 정렬
edges.sort()

#전체를 최소 신장 트리로 (크루스칼 알고리즘)
min_edges=[] #최소 신장 크리의 간선 정보 저장용 리스트
for edge in edges: #간선을 하나씩 확인하며
    cost,a,b=edge
    #사이클이 발생하지 안흔 경우에만 집합에 포함
    if find_parent(parent,a) != find_parent(parent,b):
        union_parent(parent,a,b)
        min_edges.append((cost,a,b))
        result+=cost

#비용이 가장 큰 간선을 끊어서 그룹 이분화
min_edges.sort(reverse=True)
result -= min_edges[0][0]
        
print(result)