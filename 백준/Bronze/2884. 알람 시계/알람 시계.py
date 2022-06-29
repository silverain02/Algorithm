H, M = map(int, input('').split(' '))

#0시 45분 이전 경우
if H==0 and M<45:
    H=24

#분으로 변환
T = H*60 + M
#45분 빼서 update
T -= 45
#시간으로 변환 출력
print(T//60, T%60 )