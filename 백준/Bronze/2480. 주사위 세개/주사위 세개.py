a,b,c = map(int, input().split(' '))
li =[a,b,c]
if a!=b!=c and a!=c:
    print(max(li)*100)
elif a==b==c:
    print(10000+a*1000)
else:
    if a==b or b==c: #b 같음
        print(1000+b*100)
    if a==c:
        print(1000+a*100)