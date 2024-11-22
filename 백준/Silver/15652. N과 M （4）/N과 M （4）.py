N, M = map(int, input().split())

arr = [ ]

def func(x):
    if len(arr) == M:
        print(" ".join(map(str,arr)))
        return

    for i in range(x,N+1):
        arr.append(i)
        func(i)
        arr.pop()

func(1)

