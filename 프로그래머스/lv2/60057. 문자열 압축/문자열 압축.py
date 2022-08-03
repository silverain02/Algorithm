def solution(s):
    answer = 0
    
    lst = []
    new_s = ''
    
    #문자열 길이 1인 경우 예외 처리
    if len(s) ==1:
        return 1
    
    for i in range(len(s)//2): #압축단위 순회
        cnt = 1
        for j in range(0,len(s),i+1): #문자열 압축단위만큼 점프하며 순회
            if s[j:j+(i+1)]==s[j+(i+1):j+2*(i+1)]: #뒤 문자열과 연속하면 압축
                cnt += 1
                continue
            elif cnt!=1: #압축 후
                new_s += str(cnt)
                cnt = 1 
            new_s += s[j:j+(i+1)]
            
        lst.append(len(new_s))
        new_s =''
        
    answer = min(lst)
    
    return answer

