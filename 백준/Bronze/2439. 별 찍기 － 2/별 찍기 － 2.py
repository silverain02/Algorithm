t = int(input(''))
for i in range(t,0,-1):
    for j in range(1,t+1):
        if j == t:
            print('*')
        elif j>=i:
            print('*',end='')
        else:
            print(' ',end='')