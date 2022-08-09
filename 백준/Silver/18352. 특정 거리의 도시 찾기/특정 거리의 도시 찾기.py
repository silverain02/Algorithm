#15_특정거리의 도시 찾기/ boj18352
from collections import deque
# 입력받기
import sys
input = sys.stdin.readline
n,m,k,x=map(int,input().split())
# 입력받은 리스트 바로 dfs용 graph로 전환
graph = [[] for _ in range(n+1)] 
for _ in range(m):
    a,b=map(int,input().split())
    graph[a].append(b)
    
#bfs정의
visited=[False]*(n+1)
def bfs(graph,start,visited):
    queue = deque([start])
    visited[start]=True
    cnt = 0
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            cnt = dist[v] +1
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                dist[i] = cnt
                

dist = [0]*(n+1)
bfs(graph,x,visited)

result = []
mark = 1
for i in range(len(dist)):
    if dist[i] == k:
        result.append(i)
        mark = 0
if mark:
    result.append(-1)

result.sort()
#출력
for elem in result:
    print(elem)
