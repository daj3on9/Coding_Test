arr = [(i+1) for i in range(20)]

for i in range(10):
  x, y = map(int, input().split())
  arr = arr[0:x-1]+ list(reversed(arr[x-1:y])) +arr[y:20]

for i in range(20):
  print(arr[i], end=" ")