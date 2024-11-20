N, S = map(int, input().split())
arr = list(map(int, input().split()))

result = 0

cnt = 0
def seq(cnt, tal):
    global result
    if cnt == N:
        if tal == S:
            result += 1
        return

    seq(cnt+1, tal)
    seq(cnt+1, tal+arr[cnt])

seq(0, 0)

if S == 0 :
    result -= 1 # 공집합 뺴기!!

print(result)
