function solution(progresses, speeds) {
    var answer = [];
    
     const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    
    while(days.length > 0){
        let first_task = days.shift();
        let cnt = 1;
        
        while(days.length > 0 && days[0] <= first_task){
            days.shift();
            cnt += 1
        }
        
        answer.push(cnt)
    }

    
    console.log(answer)
    
    
    return answer;
}