#ch6 b2 12760 최후의 승자는 누구?
n,m = map(int,input().split())
lst = []
for i in range(n):
    lst.append(list(map(int,input().split())))
#스코어 저장용 리스트 형성
i=0
score = []
for i in range(n):
    score.append([i+1,0])
i=0
for i in range(m): #m회 게임 반복
    #가장 큰 수 구하기
    M=0
    for j in range(n): #n명 플레이어 순서대로
        if M <= max(lst[j]):
            M = max(lst[j])
    #점수 배정
    j=0
    for j in range(n):
        if M == max(lst[j]):
            score[j][1] += 1
        lst[j].remove(max(lst[j]))

#점수 비교해 우승자 출력
scoreM = 0
i=0
for i in range(n):
    if scoreM <= score[i][1]:
        scoreM = score[i][1]
i=0
for i in range(n):
    if scoreM == score[i][1]:
        print(score[i][0], end = ' ')