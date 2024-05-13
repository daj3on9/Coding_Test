def solution(num, total):
    answer = []
    
    for i in range(0,num):
        answer.append(i)
        
    while(1):
        if(sum(answer) == total):
            break
        elif(sum(answer) < total):
            answer = [i+1 for i in answer]
        else:
            answer = [i-1 for i in answer]
            
    return answer