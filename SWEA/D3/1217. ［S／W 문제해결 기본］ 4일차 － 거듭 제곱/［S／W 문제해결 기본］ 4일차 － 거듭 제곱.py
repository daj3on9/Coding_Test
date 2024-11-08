def func(n,m):
  if(m == 1):
    return n
  return n * func(n,m-1)

for _ in range(10):
  i = int(input())

  n,m = map(int,input().split())
  result = func(n,m)
  print(f"#{i} {result}")
