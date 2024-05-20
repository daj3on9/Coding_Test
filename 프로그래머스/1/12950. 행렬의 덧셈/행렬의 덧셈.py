def solution(arr1, arr2):
    answer = []
    for x,y in zip(arr1,arr2):
        sum = []
        
        for i,k in zip(x,y):
            sum.append(i+k)
            
        answer.append(sum)
    return answer