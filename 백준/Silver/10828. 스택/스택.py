N = int(input())
stack = []

for i in range(N):
  order = input().split()
  if order[0] == 'push':
    stack.append(order[1]) # 가장 마지막에 원소 추가
  elif order[0] == 'pop' and stack:
    print(stack.pop())
  elif order[0] == 'size':
    print(len(stack))
  elif order[0] == 'empty':
    print(1 if len(stack) == 0 else 0)
  elif order[0] == 'top' and stack:
    print(stack[-1])
  else:
    print(-1)
