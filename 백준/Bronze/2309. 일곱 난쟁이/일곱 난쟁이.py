arr = []

for i in range(9):
    height = int(input())
    arr.append(height)

result = sum(arr)

clue = result - 100

for j in arr:
  clue_num = clue - j
  if clue_num in arr and clue_num != j:
    arr.remove(j)
    arr.remove(clue_num)
    break # 찾았으니까 반복문 중단
    
arr.sort()
for x in arr:
  print(x, end=" ")