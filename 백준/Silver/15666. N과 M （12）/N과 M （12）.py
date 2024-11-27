N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

set_arr = sorted(list(set(arr_list)))


arr = []

def func(k, start):
    if len(arr) == M :
        print(" ".join(map(str, arr)))
        return
    for i in range(start, len(set_arr)):
        arr.append(set_arr[i])
        func(k+1, i)
        arr.pop()


func(0, 0)