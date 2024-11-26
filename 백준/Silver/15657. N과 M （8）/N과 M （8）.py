N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

arr_list.sort()

arr = []

def func(k, start):
    if k == M:
        print(" ".join(map(str, arr)))
        return
    for i in range(start, N):
        arr.append(arr_list[i])
        func(k+1, i)
        arr.pop()

func(0, 0)

