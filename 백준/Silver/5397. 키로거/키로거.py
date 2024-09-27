from collections import deque

test_case = int(input())
input_list = []



for _ in range(test_case):
    test = input()
    left = deque()
    right = deque()
    for str in test:
      if str == '<' and left:
        right.appendleft(left.pop())
      elif str == '>' and right:
        left.append(right.popleft())
      elif str == '-' and left:
        left.pop()
      elif str not in ['<', '>', '-']:
        left.append(str)
    result = (''.join(left) + ''.join(right))
    input_list.append(result)



for i in input_list:
  print(i)