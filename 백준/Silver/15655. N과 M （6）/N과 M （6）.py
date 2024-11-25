N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

arr_list.sort()

arr = []

def func(k):
    if len(arr) == M:
        print(" ".join(map(str, arr)))
        return
    for i in range(k, N):
        if arr_list[i] not in arr:
            arr.append(arr_list[i])
            func(i+1)
            arr.pop()

func(0)

