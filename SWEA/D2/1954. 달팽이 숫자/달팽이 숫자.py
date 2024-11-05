# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

for i in range(T):
  N = int(input())
  maze = [[0] * N for _ in range(N)]

  x, y = 0, 0
  direction = 0
  count = 1


  for _ in range(N*N):
    maze[x][y] = count
    count += 1

    nx = x + dx[direction]
    ny = y + dy[direction]

    if nx >= 0 and nx < N and ny >= 0 and ny < N and maze[nx][ny] == 0:
      # 다음 위치로 이동
      x, y = nx, ny
    
    else:
      # 방향 전환 동->남->서->북
      direction = (direction + 1) % 4
      x += dx[direction]
      y += dy[direction]

  print(f"#{i+1}")
  for row in maze:
    print(" ".join(map(str, row)))