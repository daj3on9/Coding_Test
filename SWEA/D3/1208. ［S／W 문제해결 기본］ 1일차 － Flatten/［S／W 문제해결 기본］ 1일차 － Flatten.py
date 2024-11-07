for _ in range(1,11):
    N = int(input())
    boxes = list(map(int,input().split()))
    result = 0
    for i in range(N):
        boxes.sort()
        boxes[0] += 1
        boxes[-1] -= 1
    result = max(boxes) - min(boxes)
    print(f"#{_} {result}")