#ch12_boj 17413 단어뒤집기2 ~12:40
#입력받기
import sys
input = sys.stdin.readline
s=input()

result = ''
i=0
while i < len(s)-1:
    part=''
    #태그 안 > 그대로
    if s[i] == '<':
        i+=1
        while not(s[i] == '>'):
            part += s[i]
            i+=1
        result +=  '<'+part+'>'
        i+=1
        continue
    
    elif s[i] == ' ':
        result += ' '
        i += 1
        continue
    
    #단어는 뒤집어서
    else:
        while s[i].isdigit() or s[i].isalpha():
            part += s[i]
            i+=1
        result += part[::-1]
        continue
print(result)