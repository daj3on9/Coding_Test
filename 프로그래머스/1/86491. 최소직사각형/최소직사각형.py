def solution(sizes):
    answer = 0
    
    x_max = 0
    y_max = 0
    
    for i in sizes:
        x, y = sorted(i)
        if x_max < x:
            x_max = x
        if y_max < y:
            y_max = y
            
    answer = x_max * y_max
    
    return answer