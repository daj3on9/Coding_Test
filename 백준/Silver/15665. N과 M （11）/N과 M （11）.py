N, M = map(int, input().split())
arr_list = list(map(int, input().split()))

set_arr = sorted(list(set(arr_list)))


arr = []

def func(k):
    if len(arr) == M :
        print(" ".join(map(str, arr)))
        return
    for num in set_arr:
        arr.append(num)
        func(k+1)
        arr.pop()


func(0)