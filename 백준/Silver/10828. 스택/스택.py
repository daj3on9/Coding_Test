import sys
N = int(input())
stack = []

for i in range(N):
  order = sys.stdin.readline().split()
  if order[0] == 'push':
    stack.append(order[1]) # 가장 마지막에 원소 추가
  elif order[0] == 'pop' and stack:
    print(stack.pop()) # 가장 마지막 원소 제거 및 출력
  elif order[0] == 'size':
    print(len(stack)) # 배열의 크기 출력
  elif order[0] == 'empty':
    print(1 if len(stack) == 0 else 0) # 배열 길이가 0이면 1 출력 == 비었다는 뜻!!!
  elif order[0] == 'top' and stack:
    print(stack[-1]) # 배열의 가장 마지막 요소 출력!
  else:
    print(-1)
