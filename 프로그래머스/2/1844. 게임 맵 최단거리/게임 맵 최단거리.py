from collections import deque

def solution(maps):
    answer = 0
    
    n,m = len(maps), len(maps[0])# 행, 열
    
    dx = [0,0,-1,1]
    dy = [-1,1,0,0]
    
    def bfs(x,y):
        queue = deque()
        queue.append((x,y))
        
        while queue:
            x, y = queue.popleft()
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                
                if nx < 0 or nx >= n or ny < 0 or ny >= m or maps[nx][ny] == 0:
                    continue
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    queue.append((nx, ny))
                    
        return maps[n-1][m-1]
    
    result = bfs(0,0)
    
    return result if result > 1 else -1