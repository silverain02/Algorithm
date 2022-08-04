#11_뱀 // 백준3190//시간초과
#입력받기
import sys
input = sys.stdin.readline
n = int(input())
k = int(input())
#이차원 리스트로 지도 만들기
field=[[0]*n for _ in range(n)]
for _ in range(k):
    i,j=(map(int,input().split()))
    field[i-1][j-1]=1

l = int(input())
dir_stack = []
for _ in range(l):
    dir_stack.append(list(input().split()))

#우,하,좌,상 방향 리스트 (오른쪽 전환 순)
dir_lst = [(0,1),(1,0),(0,-1),(-1,0)]

#초기화
time = 0
j,i=0,0
d = 0
tail_len = 0
move_record = []
tail=[]
#뱀 이동

while True:
    if (i<0 or j<0 or i>=n or j>=n) or ((i,j) in tail):
        break
    
    #현 위치 기록
    move_record.append((i,j))
    
    #현재 칸에 사과(1) 있는 경우, 몸 늘리기
    if field[i][j]:
        tail_len += 1
        field[i][j]=0
        
    #방향 전환할 시간이면 방향 전환 후 삭제
    if len(dir_stack) != 0 and int(dir_stack[0][0])==time:
        if dir_stack[0][1] == 'D': #오른쪽 전환
            d += 1
        else: #왼쪽 전환
            d -= 1 
        del dir_stack[0]
        
    #머리 이동
    i += dir_lst[d%4][0]
    j += dir_lst[d%4][1]
    #꼬리 업데이트
    tail = move_record[len(move_record)-tail_len-1:len(move_record)]
    
    time += 1
    
print(time)