import sys
from collections import deque

input = sys.stdin.read  # sys.stdin.read를 사용해 한 번에 모든 입력 받기

# 모든 입력을 한 번에 읽어옴
data = input().splitlines()

# 첫 번째 줄: 초기 문자열
left = deque(data[0])
right = deque()

# 두 번째 줄: 명령어 수
N = int(data[1])

# 명령어는 세 번째 줄부터 시작
for i in range(2, 2 + N):
    order = data[i].split()
    
    if order[0] == 'L' and left:
        right.appendleft(left.pop())
    elif order[0] == 'D' and right:
        left.append(right.popleft())
    elif order[0] == 'B' and left:
        left.pop()
    elif order[0] == 'P':
        left.append(order[1])

# 최종 결과 출력
print(''.join(left) + ''.join(right))
