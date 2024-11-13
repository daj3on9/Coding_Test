n,m = map(int,input().split())
arr = [0] * m # 수열을 담을 배열
is_used = [0] * n #특정 수가 쓰였는지 true 혹은 false로 나타내는 배열

# 현재 k까지 수를 택한 상황에서 arr[k]를 정하는 함수
def func(k):
    if k == m:
        print(" ".join(map(str, arr)))
        return

    for j in range(n):
        if not is_used[j]:
            arr[k] = j + 1
            is_used[j] = 1
            func(k+1)
            is_used[j] = 0


func(0)