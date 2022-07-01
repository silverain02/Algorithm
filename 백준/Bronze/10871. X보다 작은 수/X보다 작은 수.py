n,x = map(int,input().split())

lst = map(int,input().split(' '))
for elem in lst:
    if elem < x:
        print(elem, end=' ')