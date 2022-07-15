#110773
K = int(input())
lst =[]
result = 0

for i in range(K):
    x = int(input())
    if x == 0:
        lst.pop()
    else:
        lst.append(x)

for elem in lst:
    result += elem

print(result)