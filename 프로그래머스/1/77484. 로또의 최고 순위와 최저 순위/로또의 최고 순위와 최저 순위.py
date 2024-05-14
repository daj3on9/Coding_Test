def solution(lottos, win_nums):
    answer = []
    rank = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6}
    zero = lottos.count(0) #모르는 번호
    
    hit = len([i for i in lottos if i in win_nums])
    
    max, min = hit+zero, hit
    answer = [rank[max],rank[min]]
    
    return answer