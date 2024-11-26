N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

arr_list.sort()
arr = [0] * M
is_used = [0] * N


def func(k, start):
    prev = -1
    if k == M:
        print(" ".join(map(str, arr)))
        return
    for i in range(start, N):
        if arr_list[i] == prev:
            continue
        arr[k] = arr_list[i]
        prev = arr_list[i]
        func(k + 1, i + 1)


func(0, 0)
