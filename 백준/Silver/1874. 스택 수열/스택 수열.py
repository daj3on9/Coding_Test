n = int(input())

stack = []
answer = []
cur = 1
yn = True

for i in range(n):
  num = int(input())
  while cur <= num:
    stack.append(cur)
    answer.append('+')
    cur += 1
  if stack[-1] == num:
    stack.pop()
    answer.append('-')
  else:
    print('NO')
    yn = False
    break;

if yn:
  print('\n'.join(answer))