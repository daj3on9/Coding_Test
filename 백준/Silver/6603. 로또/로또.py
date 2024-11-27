def func(k, start):
    if k == 6:
        print(" ".join(map(str, arr)))
        return
    for i in range(start, len(set_arr)):
        arr.append(set_arr[i])
        func(k+1, i+1)
        arr.pop()

while True:
    arr_list = list(map(int, input().split()))

    if arr_list[0] == 0:
        break

    set_arr = sorted(list(set(arr_list[1:])))

    arr = []

    func(0, 0)
    print()