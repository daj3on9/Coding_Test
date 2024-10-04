import math 
from collections import deque

def solution(progresses, speeds):
    answer = []
    remain = deque()
    
    cnt = 1
    
    for i in range(len(progresses)):
        x  = math.ceil((100 - progresses[i])/speeds[i])
        remain.append(x)
        
    
    while remain:
        first_task = remain.popleft()
        cnt = 1
        
        while remain and remain[0] <= first_task:
            remain.popleft()
            cnt += 1
            
        answer.append(cnt)
    
    
    return answer