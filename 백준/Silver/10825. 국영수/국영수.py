#1 국영수_BOJ10825
#입력받기
import sys
input = sys.stdin.readline
n = int(input())
lst = []
for _ in range(n):
    temp = (list(input().split()))
    temp[1],temp[2],temp[3] = int(temp[1]),int(temp[2]),int(temp[3])
    lst.append(temp)
#정렬 라이브러리 사용해 점수 기준 정렬
lst_sorted = sorted(lst, key=lambda x: (-x[1],x[2],-x[3],x[0]))
#출력
for elem in lst_sorted:
    print(elem[0])