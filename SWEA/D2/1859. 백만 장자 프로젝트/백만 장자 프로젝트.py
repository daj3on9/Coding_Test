from collections import deque
#import sys
#sys.stdin = open("input.txt", "r")

T = int(input())

for _ in range(1, T+1):
  n = int(input())
  arr = list(map(int, input().split()))
  
  max_price = 0 # 가장 비싼 값
  money = 0

  for price in reversed(arr):
    if price > max_price :
      max_price = price
    else:
      money += max_price - price
  
  print(f"#{_} {money}")
