def solution(quiz):
    answer = []
    for i in quiz:
        mx = i.split('=')
        if eval(mx[0]) == int(mx[1]):
            answer.append("O")
        else:
            answer.append("X")
    return answer