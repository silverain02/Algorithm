#ch12_7럭키스레이트 18406
#입력받기
import sys
input = sys.stdin.readline().rstrip
lst = list(map(int,input()))
center = len(lst)//2
left = lst[:center]
right = lst[center:]
if sum(left) == sum(right):
    print('LUCKY')
else:
    print('READY')