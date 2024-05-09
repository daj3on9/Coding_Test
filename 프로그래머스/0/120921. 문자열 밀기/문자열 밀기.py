from collections import deque

def solution(A, B):
    answer = 0
    
    string = deque(A)
    
    while (answer <= len(A)):
        if("".join(string) == B):
            break
        else:
            string.rotate(1)
            answer += 1
            
    if answer > len(A):
        answer = -1
        
    return answer