import math

num = int(input())
d = 2
max = int(math.sqrt(num))

while(d <= max):
    if num % d != 0:
        d += 1
    else:
        print(d)
        num = num // d
        
if num > 1:
    print(num)