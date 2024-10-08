from collections import deque

N,M = map(int,input().split()) 
target = list(map(int,input().split())) # 찾아야 하는 수

deque = deque(range(1,N+1)) # 덱 생성
cnt = 0
answer = []

for i in target:
  while True:
    if i == deque[0]:
      deque.popleft()
      break
    elif deque.index(i) <= len(deque)/2: # 왼쪽으로 한 칸 이동
      deque.append(deque.popleft())
      cnt += 1
    else: # 오른쪽으로 한칸 이동
      deque.appendleft(deque.pop())
      cnt += 1
    answer.append(cnt)
    cnt = 0

print(sum(answer))