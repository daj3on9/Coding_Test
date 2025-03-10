function solution(s) {
    const arr = s.toLowerCase().split(" ");
    
    for (let i in arr) {  
        if (arr[i]) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); 
        }
    }

    return arr.join(" ");
}