for _ in range(1,11):
  N = int(input())
  arr = list(map(int,input().split()))
  total = 0
  for i in range(2, N-2):
    max_top = arr[i]
    buildings = arr[i-2:i+3]
    buildings.remove(arr[i])
    if max_top > max(buildings):
      total += max_top - max(buildings)
    
  print(f"#{_} {total}")