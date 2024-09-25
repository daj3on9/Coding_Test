len = int(input())
numbers = list(map(int,input().split()))
x = int(input())

result = 0
visited = set() # 이미 확인한 숫자들을 저장할 집합

for i in numbers:
  if x - i in visited:
    result += 1
  visited.add(i)
  
print(result)