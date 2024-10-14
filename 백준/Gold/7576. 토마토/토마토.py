from collections import deque

m,n = map(int,input().split())

tomato_box = []

for i in range(n):
    tomato_box.append(list(map(int, input().strip().split())))

# 상하좌우 방향
dx = [-1,1,0,0]
dy = [0,0,-1,1]

cnt = 0

# 값이 1인 토마토 모두 큐에 넣기
queue = deque()
for i in range(n):
  for j in range(m):
    if tomato_box[i][j] == 1:
      queue.append((i,j))


while queue:
  x,y = queue.popleft()
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]

    if nx >= 0 and nx < n and ny >= 0 and ny < m:
      if tomato_box[nx][ny] == 0:
        tomato_box[nx][ny] = tomato_box[x][y] + 1
        queue.append((nx, ny))

for i in tomato_box:
  for j in i:
    if j == 0:
      print(-1)
      exit(0)
  cnt = max(cnt, max(i)) # 이전의 cnt 값과 max(i) 중 더 큰 값

print(cnt-1)