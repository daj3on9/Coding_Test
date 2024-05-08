def solution(babbling):
    answer = 0
    
    word = ['aya', 'ye', 'woo', 'ma']
    
    for x in babbling:
        for i in word:
            if i in x:
                x = x.replace(i,'x')
                if len(x) == 0:
                    answer += 1
                    break
                else:
                    if  len(x.replace('x','')) == 0:
                        answer += 1
                        break
    return answer