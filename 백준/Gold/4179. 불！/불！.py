from collections import deque

# 입력 받기
r, c = map(int, input().split())
maze = [list(input().strip()) for _ in range(r)]

# 방향 벡터 (상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 지훈이와 불의 위치를 저장할 큐
j_q = deque()
f_q = deque()

# 초기 위치 찾기 (지훈이와 불의 위치 큐에 추가)
for i in range(r):
    for j in range(c):
        if maze[i][j] == 'J':
            j_q.append((i, j, 0))  # (x, y, 이동 시간)
            maze[i][j] = '.'
        elif maze[i][j] == 'F':
            f_q.append((i, j))  # (x, y)

# BFS로 불의 확산 처리
def spread_fire():
    size = len(f_q)
    for _ in range(size):
        x, y = f_q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < r and 0 <= ny < c and maze[nx][ny] == '.':
                maze[nx][ny] = 'F'
                f_q.append((nx, ny))

# BFS로 지훈이의 이동 처리
def bfs():
    while j_q:
        # 먼저 불이 확산됨
        spread_fire()

        # 그 다음 지훈이가 이동
        size = len(j_q)
        for _ in range(size):
            x, y, time = j_q.popleft()

            # 지훈이가 미로의 가장자리에 도달하면 탈출 성공
            if x == 0 or x == r - 1 or y == 0 or y == c - 1:
                return time + 1  # 탈출 시간 반환

            # 지훈이의 이동 처리
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]

                # 이동 가능한 경우만 이동 (빈 칸이면서 불이 아직 도달하지 않은 곳)
                if 0 <= nx < r and 0 <= ny < c and maze[nx][ny] == '.':
                    maze[nx][ny] = 'J'  # 방문 표시
                    j_q.append((nx, ny, time + 1))

    # 탈출하지 못한 경우
    return "IMPOSSIBLE"

# 결과 출력
print(bfs())