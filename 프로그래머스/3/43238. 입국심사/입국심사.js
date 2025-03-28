function solution(n, times) {
    let low = 1;
    let high = Math.max(...times) * n;
    let mid = Math.floor((low + high)/2);
    
    while(low <= high){
        const count = times.reduce((result, cur) =>
            result + Math.floor(mid/cur)
        , 0)
        
        if(count >= n) high = mid - 1;
        else if(count < n) low = mid + 1;
        
        mid = Math.floor((low+high)/2);
    }
    
    return low;
}