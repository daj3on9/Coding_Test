def solution(wallpaper):
    answer = []
    file = []
    
    for i in range(len(wallpaper)):
        line = wallpaper[i]
        for j in range(len(line)):
            if line[j] == '#' :
                file.append([i, j])
    
    print(file)
    
    lux = min(x[0] for x in file)
    luy = min(y[1] for y in file)
    rdx = max(x[0] for x in file) + 1
    rdy = max(y[1] for y in file) + 1
    
    answer = [lux, luy, rdx, rdy]
    
    return answer