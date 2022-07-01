n = int(input()) # n = xy
ogn = n #입력받은 수
#x = n//10
#y = n%10
cnt=0

while True:
    n = (n%10)*10 + ((n//10)+(n%10))%10
    cnt += 1
    if ogn == n:
        break
print(cnt)