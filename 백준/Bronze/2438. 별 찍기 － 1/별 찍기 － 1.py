t = int(input(''))
for i in range(t):
    for j in range(i+1):
        if j == i:
            print('*')
        else:
            print('*', end='')