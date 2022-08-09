#16_연구소/14502
from heapq import heappush
from itertools import combinations
import copy
#입력받기
import sys
input = sys.stdin.readline
n,m=map(int,input().split())
field = []
for _ in range(n):
    field.append(list(map(int,input().split())))   

#재귀 dfs로 노드 방문하며 전염시키기
def infect(i,j,ck):
    #첫 노드 예외처리
    if ck:
        visited[i][j] = True
        ck = 0
        #상하좌우 재귀적 호출
        infect(i-1,j,ck)
        infect(i,j-1,ck)
        infect(i+1,j,ck)
        infect(i,j+1,ck)
    # 주어진 범위 벗어나면 즉시 종료
    elif (i<0 or i>=n or j<0 or j>=m):
        return 
    #현재 방문한 적이 없다면
    elif not visited[i][j]:
        #방문처리
        visited[i][j] = True
        #빈칸이면 전염
        if copied_field[i][j] == 0:
            copied_field[i][j] = 2
            #상하좌우 재귀적 호출
            infect(i-1,j,ck)
            infect(i,j-1,ck)
            infect(i+1,j,ck)
            infect(i,j+1,ck)
            return 
        else:
            return 
    return
        
    
#field순회하며 바이러스(2),벽(1) 좌표 찾아 각각 저장
virus = []
wall = []
empty = []
for i in range(n):
    for j in range(m):
        if field[i][j] == 0:   #빈칸
            empty.append((i,j))
        elif field[i][j] == 1: #벽
            wall.append((i,j))
        else:                  #바이러스
            virus.append((i,j))

#빈칸에서 3개 조합 모두 구하기
wall_combi = list(combinations(empty,3))
#조합 순회하며 최소 안전거리 구하기
result = []
for cmb in wall_combi:
    #벽 설치
    copied_field = copy.deepcopy(field)
    for w in cmb:
        copied_field[w[0]][w[1]] = 1
    #바이러스 기준 전염
    for v in virus:
        ck = 1
        visited=[[False for j in range(m)] for i in range(n)]
        infect(v[0],v[1],ck)
    #안전거리 구하기
    safedist = 0
    for row in copied_field:
        safedist += row.count(0)
    #각 cmb의 안전거리 결과리스트에 저장
    result.append(safedist)
#안전거리 최소값 출력
print(max(result))