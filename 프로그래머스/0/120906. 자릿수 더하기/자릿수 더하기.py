def solution(n):
    answer = 0
    n = list(map(int, str(n)))
    for i in range(0,len(n)):
        answer += n[i]
    return answer