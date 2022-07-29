#ch9b1
import heapq
INF = int(1e9) #무한 값 10억 설정
#입력받기
import sys
input = sys.stdin.readline

def dijkstra():
    q= []
    #시작노드로 가기 위한 최단 경로 큐에 삽입
    heapq.heappush(q,(lst[0][0],(0,0)))
    distance[0][0]=lst[0][0]
    now=[0,0]
    while q:#큐가 비어있지 않다면
        #가장 최단거리가 짧은 노드 정보꺼내기
        dist,(now[0],now[1])=heapq.heappop(q)
        #현재 노드가 이미 처리된 적이 있는 노드라면 무시
        if distance[now[0]][now[1]]<dist:
            continue
        #현재노드와 연결된 다른 인접한 노드들을 확인
        for i in graph[now[0]][now[1]]:
            cost = dist+i[1] #자기 노드까지의 거리 + 인접노드까지의 거리
            #현재노드를 거쳐서 ,다른 노드로 이동하는 거리가 더 짧은 경우
            if cost<distance[i[0][0]][i[0][1]]:
                distance[i[0][0]][i[0][1]]=cost 
                heapq.heappush(q,(cost,i[0])) #힙에 (거리,노드) 추가

result = []
t = int(input())
while t!=0:
    # 지도 2차원 리스트로 입력받기
    lst = [list(map(int,input().split())) for _ in range(t)]
    #시작노드 번호
    start = (0,0)
    #각 노드에 연결된 노드 정보 담은 리스트(3차원)
    graph = []
    for i in range(t):
        graph.append([])
        for j in range(t):
            graph[i].append([])
            
    #방문한 적 있는지 체크하는 목적의 리스트
    visited = []
    for i in range(t):
        visited.append([])
        for j in range(t):
            visited[i].append(False)
    
    #최단거리 테이블 모두 무한으로 초기화
    distance = []
    for i in range(t):
        distance.append([])
        for j in range(t):
            distance[i].append(INF)
                
    #모든 간선 정보 입력    
    for i in range(t):
        for j in range(t):
            if j<t-1:
                graph[i][j].append(((i,j+1),lst[i][j+1])) #우
            if i<t-1: 
                graph[i][j].append(((i+1,j),lst[i+1][j])) #하
            
            ##case2오류>좌,상도 탐
            
            if j>0:
                graph[i][j].append(((i,j-1),lst[i][j-1])) #좌
            if i>0:
                graph[i][j].append(((i-1,j),lst[i-1][j])) #상
    
    
    #다익스트라 알고리즘 수행
    dijkstra()
    #탈출지점에서의 최단거리 구하기(시작점cost+시작점~끝점 cost)
    result.append(distance[t-1][t-1])
    
    t = int(input())
for elem in result:
    print(f'Problem {result.index(elem)+1}: {elem}')