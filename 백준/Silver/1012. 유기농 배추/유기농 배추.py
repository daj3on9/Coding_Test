from collections import deque

T = int(input())

dx = [0, 0, 1, -1]
dy = [-1, 1, 0, 0]

def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0  # 방문한 곳을 0으로 바꿔서 다시 탐색하지 않도록
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1:  # 배추가 있는 곳이면
                queue.append((nx, ny))
                graph[nx][ny] = 0  # 방문한 곳을 0으로 처리

for _ in range(T):
    m, n, k = map(int, input().split())
    graph = [[0] * m for _ in range(n)]

    for _ in range(k):
        cabbage_x, cabbage_y = map(int, input().split())
        graph[cabbage_y][cabbage_x] = 1

    worm = 0

    for i in range(n):  # 세로 좌표를 먼저
        for j in range(m):  # 가로 좌표
            if graph[i][j] == 1:  # 배추가 있는 곳을 발견하면
                bfs(i, j)
                worm += 1

    print(worm)
