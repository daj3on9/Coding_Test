def solution(s):
    answer = []
    dict = {}
    s = list(s)
    for x in range(len(s)):
        if s[x] in dict:
            answer.append(x-dict[s[x]])
        else:
            answer.append(-1)
        dict[s[x]] = x
    return answer