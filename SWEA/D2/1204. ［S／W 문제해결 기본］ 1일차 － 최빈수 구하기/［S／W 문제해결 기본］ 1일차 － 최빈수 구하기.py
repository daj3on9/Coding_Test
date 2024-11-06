T = int(input())

for _ in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    count = [0] * 1000

    for i in arr:
        count[i] += 1

    max_count = max(count)
    # 역순으로 탐색하여 가장 큰 인덱스 찾기
    max_index = len(count) - 1 - count[::-1].index(max_count)
    
    print(f"#{_} {max_index}")
