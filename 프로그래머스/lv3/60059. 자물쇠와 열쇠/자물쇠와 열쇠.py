#10_자물쇠와 열쇠
import copy

#90도 회전 함수
def rotate(lst):
    n=len(lst) #행,열 길이
    new=[[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            new[j][n-i-1] = lst[i][j]
    return new

def extend(lst,n,m):
    for elem in lst: #좌우 확장
        for _ in range(m-1):
            elem.insert(0,0)
            elem.insert(len(elem),0)
    for _ in range(m-1): #상하 확장
        lst.insert(0,[0]*(n+2*m-2))
        lst.insert(len(lst),[0]*(n+2*m-2))


# 이차원 리스의 중앙이 다 1로 채워져있는지 확인
def check_full(lst,n,m):
    for i in range(m-1,n+m-1):
        for j in range(m-1,n+m-1):
            if lst[i][j] != 1:
                return False
    return True

def solution(key, lock):
    
    n = len(lock)
    m = len(key)

    #lock확장
    extend(lock,n,m)
    
    # key를 회전시킨 리스트 (시계방향 90도씩 회전)
    rotated_key = [key]
    for _ in range(3): #4회 회전 시 자기자신(3회까지 회전 가능)
        key = rotate(key)
        rotated_key.append(key)
    
    
    # 확장된 lock 순차탐색하며 key와 맞는지 확인
    for k in rotated_key: #회전된 key 순회
        # lock위에서 key를 이동시키며 확인
        for i in range(n+m-1): #열 이동
            for j in range(n+m-1): #행 이동    
                        
                #key 맞는지 확인 
                        
                copied_lock = copy.deepcopy(lock)
                #key를 해당 lock에 합치기
                for x in range(i,i+m):
                    for y in range(j,j+m):
                        copied_lock[x][y] += k[x-i][y-j]
                
                # key 넣었을 때 다 1인지 확인
                if check_full(copied_lock,n,m):
                    return True
    return False            
        
