#1543
s1 = list(input())
s2 = list(input())
l = len(s2)
cnt = 0
for i in range(len(s1)):
    ch = s1[0:l]
    if ch == s2:
        cnt += 1
        del s1[0:len(s2)]
    else:
        del s1[0:1]
print(cnt)
