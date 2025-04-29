function solution(prices) {
    const answer = [];
    
    for(let i = 0; i < prices.length; i++){
        const current = prices[i];
        let count = 0;
        
        for(let j = i+1; j < prices.length; j++){
            count++;
            
            if(prices[j] < current) break;

        }
        answer.push(count)
    }
    return answer
}