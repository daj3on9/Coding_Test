from collections import Counter

arr_list = list(map(int, input().split()))

count = Counter(arr_list)  # 각 숫자의 등장 횟수 세기

if 3 in count.values():
  print(10000 + arr_list[0]*1000)
elif 2 in count.values():
  for num, v in count.items():
    if v == 2:
      print(1000 + num * 100)
else:
  print(max(count) * 100)