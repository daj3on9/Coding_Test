def solution(babbling):
    answer = 0
    word = ["aya","ye","woo","ma"]
    for token in babbling:
        for i in word:
            if i * 2 not in token:
                token = token.replace(i, ' ')
        if token.isspace():
            answer += 1
    return answer