import sys
t = int(input('')) #케이스 개수
for i in range(t):
    x,y = map(int,sys.stdin.readline().split())
    print(x+y)