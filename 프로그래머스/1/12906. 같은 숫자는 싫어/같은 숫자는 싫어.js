function solution(arr)
{
    var answer = [];
    
    for(let i=0; i < arr.length; i++){
        
        answer.push(arr[i]);
        
        if(i > 0 && arr[i-1] == arr[i]){
            answer.pop()
        }
    }
    
    
    return answer;
}