#ch11_3 문자열 뒤집기
import sys
input = sys.stdin.readline().rstrip
#입력받아 리스트로 저장
lst = list(map(int,input()))

#연속된 0,1파트 개수 세기
cnt=[0,0]
for i in range(0,len(lst)): #리스트 순회
    if i==0 or lst[i] != lst[i-1]:
        if lst[i]==0:
            cnt[0] += 1
        else:
            cnt[1] += 1

#연속된 0,1파트 개수 중 작은 것 출력
print(min(cnt))