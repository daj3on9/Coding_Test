import sys
from collections import deque

# 큐 선언
queue = deque()

# 명령 수 입력
N = int(sys.stdin.readline())

# 명령 처리
for _ in range(N):
    command = sys.stdin.readline().strip().split()
    
    # push 명령 처리
    if command[0] == 'push':
        queue.append(command[1])
    
    # pop 명령 처리
    elif command[0] == 'pop':
        if queue:
            print(queue.popleft())
        else:
            print(-1)
    
    # size 명령 처리
    elif command[0] == 'size':
        print(len(queue))
    
    # empty 명령 처리
    elif command[0] == 'empty':
        if queue:
            print(0)
        else:
            print(1)
    
    # front 명령 처리
    elif command[0] == 'front':
        if queue:
            print(queue[0])
        else:
            print(-1)
    
    # back 명령 처리
    elif command[0] == 'back':
        if queue:
            print(queue[-1])
        else:
            print(-1)
