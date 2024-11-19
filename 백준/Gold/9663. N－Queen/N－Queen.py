n = int(input())

ans = 0
cols = [False] * n
diagonal1 = [False] * (2 * n - 1)
diagonal2 = [False] * (2 * n - 1)


def n_queens(x):
    global ans
    if x == n:
        ans += 1
        return

    for y in range(n):
        if not cols[y] and not diagonal1[x - y + n - 1] and not diagonal2[x + y]:
            # 현재 위치 [x, y]에 퀸을 놓는다.
            cols[y] = diagonal1[x - y + n - 1] = diagonal2[x + y] = True
            n_queens(x + 1)
            # 백트래킹: 퀸을 제거한다.
            cols[y] = diagonal1[x - y + n - 1] = diagonal2[x + y] = False


n_queens(0)
print(ans)
