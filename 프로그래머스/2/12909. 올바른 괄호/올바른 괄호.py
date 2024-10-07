from collections import Counter

def solution(s):
    answer = True
    
    counter = Counter(s)
    stack = []
    
    if counter['('] != counter[')']:
        return False
    
    for i  in s:
        if i == ')' and stack and stack[-1] == '(':
            stack.pop()
        elif i == '(':
            stack.append(i)
        
    if len(stack) > 0 :
        return False
    
    return True