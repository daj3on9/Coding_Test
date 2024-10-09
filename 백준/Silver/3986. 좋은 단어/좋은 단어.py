N = int(input())

cnt = 0

for _ in range(N):
  word = input()
  stack = []
  for i in word:
    if len(stack) == 0:
      stack.append(i)
    else:
      if i == stack[-1]:
        stack.pop()
      else:
        stack.append(i)
  if stack == []:
    cnt += 1
  
print(cnt)