L, C = map(int,input().split())
letters = sorted(list(map(str,input().split())))

arr = []

def func1(vowels, consonants, start):
    if len(arr) == L:
        # 최소 모음, 자음 개수 만족 확인
        if vowels >= 1 and consonants >= 2:
            print("".join(arr))
        return
    
    for i in range(start, C):
        arr.append(letters[i])
        
        # 만약 모음이면
        if letters[i] in 'aeiou':
            func1(vowels + 1, consonants, i + 1) # 모음 수 + 1
        else:
            func1(vowels , consonants + 1, i + 1) # 자음 수 + 1
        
        arr.pop()

func1(0, 0, 0)    
        