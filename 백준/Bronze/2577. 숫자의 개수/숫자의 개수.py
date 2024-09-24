nums = [0,1,2,3,4,5,6,7,8,9]
dict = { k:0 for k in nums}

sum = 1

for i in range(3):
  num =int(input())
  sum *= num

for j in str(sum):
  if int(j) in dict:
    dict[int(j)] += 1

for u in dict.values():
  print(u)