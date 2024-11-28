def dfs(y_count):
    global cnt

    # 'Y'가 4명 이상이면 조합이 불가능
    if y_count >= 4:
        return

    # 7명이 선택되었을 때 조건 확인
    if len(princess) == 7:
        # 이미 확인된 조합인지 체크
        if tuple(sorted(princess)) not in visited:
            visited.add(tuple(sorted(princess)))
            cnt += 1
        return

    # 현재 공주 그룹에 포함된 모든 좌표를 기준으로 탐색
    for x, y in princess:
        for k in range(4):
            nx, ny = x + dx[k], y + dy[k]

            # 유효한 범위인지 확인 및 방문 여부 확인
            if 0 <= nx < 5 and 0 <= ny < 5 and (nx, ny) not in princess:
                princess.append((nx, ny))  # 후보군 추가
                
                # 'S' 또는 'Y' 여부에 따라 DFS 호출
                if student[nx][ny] == 'S':
                    dfs(y_count)
                else:
                    dfs(y_count + 1)

                princess.pop()  # 후보군 제거 (백트래킹)


# 입력 및 초기 설정
student = [list(input().strip()) for _ in range(5)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

cnt = 0  # 가능한 조합 수
visited = set()  # 중복 조합 체크
princess = []  # 현재 후보군

# 'S'로 시작하는 모든 경우 탐색
for i in range(5):
    for j in range(5):
        if student[i][j] == 'S':
            princess.append((i, j))
            dfs(0)
            princess.pop()  # 백트래킹을 위해 초기화

print(cnt)