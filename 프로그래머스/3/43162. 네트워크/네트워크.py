from collections import deque

def solution(n, computers):
    answer = 0
    visited = [0] * n

    def bfs(start):
        queue = deque()
        queue.append(start)
        visited[start] = True
        
        while queue:
            node = queue.popleft()
            for i in range(n):
                if computers[node][i] == 1 and visited[i] == False:
                    queue.append(i)
                    visited[i] = True
        
    
    for i in range(n):
        if not visited[i]:
            bfs(i)
            answer += 1
    
    return answer