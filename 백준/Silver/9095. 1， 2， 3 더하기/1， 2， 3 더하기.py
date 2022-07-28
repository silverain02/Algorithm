#ch8b1 9095
import sys
t= int(sys.stdin.readline())
result=[]
for i in range(t):
    n = int(sys.stdin.readline())
    #dp테이블
    d = [0]*11
    #보텀업 다이나믹
    d[1]=1
    d[2]=2
    d[3]=4
    for j in range(4,n+1):
        d[j]=d[j-1]+d[j-2]+d[j-3]
    
    result.append(d[n])

for i in result:
    print(i)
