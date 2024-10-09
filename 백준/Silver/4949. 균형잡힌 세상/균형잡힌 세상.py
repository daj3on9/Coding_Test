while True:
  a = input()
  stack = []

  if a == '.':
    break

  for i in a:
    if i == '(' or i == '[':
      stack.append(i)
    elif i == ')':
      if stack != [] and stack[-1] == '(':
        stack.pop()
      else:
        print('no')
        break
    elif i == ']':
      if stack != [] and stack[-1] == '[':
        stack.pop()
      else:
        print('no')
        break
  else:
    if stack == []:
      print('yes')
    else:
      print('no')