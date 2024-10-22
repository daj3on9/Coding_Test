from collections import deque

s, y = map(int, input().split())
arr = [-1] * 100001  # 방문 여부를 -1로 초기화

def bfs(x):
    if x == y:  # 시작점이 도착점과 같으면 바로 0 반환
        return 0

    arr[x] = 0  # 시작점은 0으로 설정
    q = deque([x])

    while q:
        x = q.popleft()

        # 현재 위치에서 가능한 다음 이동 계산
        cal = [x - 1, x + 1, 2 * x]

        for i in cal:
            if 0 <= i <= 100000 and arr[i] == -1:  # 방문하지 않은 곳만
                arr[i] = arr[x] + 1
                if i == y:  # 목표 지점에 도달하면 결과 반환
                    return arr[i]
                q.append(i)

# 결과 출력
print(bfs(s))
