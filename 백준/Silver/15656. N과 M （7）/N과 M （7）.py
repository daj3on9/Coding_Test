N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

arr_list.sort()

arr = []

def func(k):
    if k == M:
        print(" ".join(map(str, arr)))
        return
    for i in range(N):
        arr.append(arr_list[i])
        func(k+1)
        arr.pop()

func(0)
