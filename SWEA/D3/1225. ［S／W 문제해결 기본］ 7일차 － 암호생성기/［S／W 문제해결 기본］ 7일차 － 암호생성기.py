from collections import deque

for t in range(10):
    N = int(input())
    arr = deque(map(int, input().split()))
    cnt = 1 

    while True:
        target = arr.popleft() - cnt  
        if target <= 0:
            arr.append(0) 
            break
        else:
            arr.append(target) 
        cnt += 1
        
        if cnt > 5:
            cnt = 1

    print(f"#{N}", " ".join(map(str, arr)))