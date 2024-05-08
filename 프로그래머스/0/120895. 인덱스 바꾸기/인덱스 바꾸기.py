def solution(my_string, num1, num2):
    answer = ''
    new = (list(my_string))
    new[num1], new[num2] = new[num2], new[num1]
    answer = "".join(new)
    
    return answer