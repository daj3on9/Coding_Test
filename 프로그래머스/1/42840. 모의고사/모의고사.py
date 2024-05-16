def solution(answers):
    answer = []
    score = [0,0,0]
    
    st1 = [1,2,3,4,5]
    st2 = [2,1,2,3,2,4,2,5]
    st3 = [3,3,1,1,2,2,4,4,5,5]
    
    for i in range(len(answers)):
        
        if answers[i] == st1[i%len(st1)]:
            score[0] += 1
        
        if answers[i] == st2[i%len(st2)]:
            score[1] += 1
        
        if answers[i] == st3[i%len(st3)]:
            score[2] += 1
        
    for idx, num in enumerate(score) :
        if num == max(score) :
            answer.append(idx +1)
            
    return answer