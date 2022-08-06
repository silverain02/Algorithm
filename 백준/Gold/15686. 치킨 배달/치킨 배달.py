#13_치킨배달
from itertools import combinations
#입력받기
import sys
input = sys.stdin.readline
n,m=map(int,input().split())
field = []
for _ in range(n):
    field.append(list(input().split()))

# 각 집의 좌표와 치킨의 좌표 리스트를 인자로 받아 도시의 치킨거리 반환
def cal_dist(home,ck):
    home_dist = [] #각 집의 치킨 거리 저장용 리스트
    #집 좌표 리스트 순회하며 치킨 거리 찾기
    for h in home:
        stack = [] #각 집의 치킨거리stack
        for c in ck:
            stack.append(abs(h[0]-c[0])+abs(h[1]-c[1]))
        home_dist.append(min(stack))
    return (sum(home_dist))
        

#초기화
home_dist = [] #각 집의 치킨 거리 저장용 리스트
home = [] #집 좌표 저장용 리스트
ck = [] #치킨 좌표 저장용 리스트

#이차원 리스트(지도) 순회 > 집/치킨 좌표 각각 저장
for i in range(n):
    for j in range(n):
        #집(1) 발견
        if field[i][j]=='1':
            home.append((i+1,j+1))
        #치킨(2) 발견
        elif field[i][j]=='2':
            ck.append((i+1,j+1))

#치킨집을 폐업시켜야 하는 경우
if len(ck)>m:
    #치킨집 리스트(ck)에서 m개 조합한 리스트 구성
    m_ck = list(combinations(ck,m))
    picked_ck_citydist = []
    for c in m_ck:
        picked_ck_citydist.append(cal_dist(home,c))
    result = min(picked_ck_citydist)
else:
    result = cal_dist(home,ck)
    
#도시의 치킨거리 최소값 출력
print(result)