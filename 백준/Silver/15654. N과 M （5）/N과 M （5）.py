N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

arr_list.sort()

arr = [0]*M
is_used = [0]*N

def func(k):
    if k == M:
        print(" ".join(map(str, arr)))
        return

    for i in range(N):
        if not is_used[i]:
            arr[k] = arr_list[i]
            is_used[i] = 1
            func(k+1)
            is_used[i] = 0

func(0)

