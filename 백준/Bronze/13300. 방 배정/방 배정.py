num, max_num = map(int, input().split())
room = 0

# 2차원 배열 선언
array = [[0 for col in range(6)] for row in range(2)]

for i in range(num):
  sex, grade = map(int, input().split())
  array[sex][grade-1] += 1


for i in array :
  for j in i:
    room += (j+max_num -1)//max_num

print(room)