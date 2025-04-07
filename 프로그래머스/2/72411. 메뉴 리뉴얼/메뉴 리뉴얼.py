from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    
    for c in course:
        combis = []
        for order in orders:
            sorted_order = sorted(order)
            combis += combinations(sorted_order, c)
        
        # 등장 횟수를 센다
        counter = Counter(combis)
        
        # 조합 중 2번 이상 등장한 것 중 최댓값을 찾는다
        if counter:
            max_count = max(counter.values())
            if max_count > 1:
                for combi, count in counter.items():
                    if count == max_count:
                        answer.append(''.join(combi))
    
    return sorted(answer)
