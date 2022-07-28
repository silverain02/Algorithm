#ch8b2 1965 상자 넣기
import sys
input = sys.stdin.readline
#입력받기
n = int(input())
lst = list(map(int,input().split()))
#각 상자에 넣어진 상자 정보를 담은 리스트(dp테이블)
d=[]
for _ in range(n):
    d.append([])

for i in range(n): #상자리스트 순회
    Max_box=[]
    for j in range(i): #뽑힌 상자 왼쪽 탐색
        #왼쪽 상자가 뽑힌 상자보다 작으면 넣기
        if lst[j]<lst[i] and len(Max_box)<=len(d[j]):
            Max_box = d[j]+[j+1] #뽑힌 상자에 넣어진 상자들 + 뽑힌 상
    d[i]=Max_box

#넣은 상자 개수가 가장 많은 것 출력
print(max([len(k) for k in d])+1)#넣어진 박스 개수 + 자기자신
