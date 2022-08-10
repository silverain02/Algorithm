#18_괄호변환

def ck_correct(s):
    #문자열 순회
    s2 = ''
    for i in range(len(s)):
        if s[i] == '(':
            s2 += s[i]
        #괄호 닫히면 괄호 한쌍 제거
        elif len(s2)!=0:
            s2 = s2[:-1]
    #전체 삭제된 경우 올바른 문자열
    if len(s2) == 0:
        return True
    return False
    
def ck_empty(s):
    if len(s) == 0:
        return True
    else:
        return False

def reverse(s):
    result = ''
    for i in range(len(s)):
        if s[i] == '(':
            result += ')'
        else:
            result += '('
    return result 

def trans_to_cor(w):
    #빈 문자열 판단
    if ck_empty(w):
        return w
    else:
        #문자열을 균형잡힌 문자열 두개로 자르는 지점 저장
        spr_pnt = []
        cnt = 0
        for i in range(len(w)):
            if w[i] == '(':
                cnt += 1
            elif w[i] == ')':
                cnt -= 1
            if cnt == 0:
                spr_pnt.append(i+1)
        # 문자열 분리       
        for pnt in spr_pnt:
            u = w[:pnt]
            v = w[pnt:]
            #u가 올바른 문자열이면
            if ck_correct(u):
                #v 변환 후 합치기
                return u + trans_to_cor(v)
            #u가 올바른 문자열이 아니라면
            else:
                temp = '(' + trans_to_cor(v) +')'
                u = u[1:len(u)-1]
                u = reverse(u)
                temp += u
                return temp

def solution(p):
    #전달받은 인자가 올바른 문자열이면 그대로 반환
    if ck_correct(p):
        return p
    #아니면 올바른 문자열로 전환해 반환
    else:
        return trans_to_cor(p)