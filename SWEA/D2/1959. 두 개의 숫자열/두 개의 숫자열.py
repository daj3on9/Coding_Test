T = int(input())

for i in range(1,T+1):
  N,M = map(int,input().split())
  
  if N < M:
    min, max = N, M
    A = list(map(int,input().split()))
    B = list(map(int,input().split()))
  else:
    min, max = M, N
    B = list(map(int,input().split()))
    A = list(map(int,input().split()))
  
  max_multiple = 0

  for u in range(max- min + 1):
    total = 0
    for v in range(min):
      total += A[v] * B[v+u]
    if total > max_multiple:
      max_multiple = total

  print(f"#{i} {max_multiple}")