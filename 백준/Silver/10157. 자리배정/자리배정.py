#101057 자리배정
import sys
#2차원 리스트 형성
c,r = map(int,input().split())
k= int(input())
lst = []
for i in range(r):
    lst.append([])
    for j in range(c):
        lst[i].append(0) #전체 리스트 내 값 0으로 초기화

#k가 배열최대수를 벗어난 경우
if k > c*r:
    print(0)
    sys.exit()

i,j = r-1,0 #시작점
for n in range(1,k): #1~k까지 배정
    #현 노드에 방문 표시
    lst[i][j] = n
    #상,우,하,좌 방향으로 이동
    if i>0 and lst[i-1][j] == 0 and (j==0 or lst[i][j-1] != 0) :
        i = i-1
    elif j<c-1 and lst[i][j+1] == 0:
        j = j+1
    elif i<r-1 and lst[i+1][j] == 0:
        i = i+1
    elif j>0 and lst[i][j-1] == 0:
        j = j-1
        
#출력
print(f'{j+1} {r-i}')