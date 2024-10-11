from collections import deque

def bfs(x, y):
    # 큐 선언
    queue = deque()
    queue.append((x, y))  # 튜플로 수정

    # 큐가 빌 때까지 반복
    while queue:
        x, y = queue.popleft()
        # 현재 위치에서 4가지 방향으로 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 미로찾기 구간을 벗어나면 무시
            if nx < 0 or nx >= n or ny < 0 or ny >= m:  # 조건 수정 (0-indexed라서 n, m을 초과하면 안 됨)
                continue
            # 0이면 무시
            if graph[nx][ny] == 0:
                continue
            # 처음 방문하는 노드이면 최단 거리 적기
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))

    # 가장 오른쪽 아래까지의 최단 거리 반환
    return graph[n-1][m-1]

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 상하좌우 방향 정의
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

print(bfs(0, 0))
