def solution(s):
    answer = []
    
    dict = {"zero" : 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4, "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9}
    s = list(s) # 문자열 배열로 변환
    text = ""
    
    for x in range(len(s)):
        # 알파벳인지 확인
        if s[x].isalpha():
            text = text+s[x]
            if text in dict:
                answer.append(dict[text])
                text = ""
        else:
            # 알파벳 아니면 바로 추가
            answer.append(s[x])
        
        result = ''.join(str(s) for s in answer)
        
    return int(result)