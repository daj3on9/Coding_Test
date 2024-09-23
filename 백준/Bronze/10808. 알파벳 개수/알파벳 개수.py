from collections import Counter

word = input()
counter = Counter(word)

alpabet = {}
for i in range(97,123):
  alpabet[chr(i)] = 0

for letter in counter:
  if letter in alpabet:
    alpabet[letter] = counter[letter]

for j in alpabet.values():
  print(j, end= " ")