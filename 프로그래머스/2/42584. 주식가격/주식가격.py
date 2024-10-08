def solution(prices):
    answer = []
    num = len(prices)
    
    for i in range(num):
        cnt = 0
        for j in range(i+1, num):
            cnt += 1
            if prices[i] > prices[j]:
                answer.append(j-i)
                break
        else:
            answer.append(num-1-i)
                
    return answer