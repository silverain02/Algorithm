H, M = map(int, input('').split(' '))
C = int(input(''))

#분으로 변환
T = H*60 + M
#C 합쳐서 업데이트
T += C

#시간으로 변환
H=T//60
M=T%60
#24시간 넘어가는 경우 조정
if H>=24:
    H -=24
print(H,M)