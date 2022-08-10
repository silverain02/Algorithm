#17경쟁적 전염
#입력받기
from collections import deque
import sys
input = sys.stdin.readline
n,k=map(int,input().split())
field = []
for _ in range(n):
    field.append(list(map(int,input().split())))
s,x,y = map(int,input().split())

#바이러스 위치파악해 좌표저장 > 큐 구현을 위해 deque라이브러리 사용
queue = deque()
for i in range(n):
    for j in range(n):
        if field[i][j] != 0:  
            queue.append((i,j,field[i][j]))
#큐 바이러스 값 기준 정렬
queue=deque(sorted(queue,key= lambda x: x[2]))

#상하좌우 좌표 이동용 리스트
moving_dir = [(-1,0),(0,-1),(1,0),(0,1)]
#bfs정의
def bfs(x,y,t,queue):
    #상하좌우 탐색
    for d in moving_dir:
        i,j = x+d[0],y+d[1]
        #범위 안에 있고 0인 경우 전염 후 vir에 삽입
        if not(i<0 or i>=n or j<0 or j>=n) and field[i][j]==0:
            queue.append((i,j,t))
            field[i][j] = t

#s초 돌리기
size = len(queue)
for _ in range(s):
    for _ in range(size):
        i,j,t = queue.popleft()
        bfs(i,j,t,queue)
    size = len(queue)
print(field[x-1][y-1])