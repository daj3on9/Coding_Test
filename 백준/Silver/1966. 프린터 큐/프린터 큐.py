from collections import deque

t = int(input()) 

for i in range(t):

    n,m = map(int, input(). split())
    level = deque((map(int, input().split())))

    cnt = 0
    
    while level:
        if level[0] < max(level):
            level.rotate(-1)

        else:
            level.popleft()
            cnt += 1
            if m == 0:
                break
        
        m = m -1
        if (m < 0):
            m =len(level) -1
        
    print(cnt)
