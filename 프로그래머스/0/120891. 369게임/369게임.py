def solution(order):
    answer = 0
    game = ["3","6","9"]
    for i in str(order):
        if i in game:
            answer += 1
    return answer