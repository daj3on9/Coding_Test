function solution(distance, rocks, n) {
    rocks.sort((a,b)=>a-b); // 오름차순 정렬
    
    rocks.push(distance)
    
    let left = 1;
    let right = distance;
    
    let answer = 0
    
    while(left <= right){
        let mid = Math.floor((left+right)/2) // 최솟값 거리의 후보
        
        let prev = 0 // 이전 바위의 위치
        let removeCount = 0 // 제거한 바위 개수
        
        for(let rock of rocks){
            let gap = rock - prev; // 현재 바위 - 이전 바위
            
            if (gap < mid) {removeCount++;}
            else {prev = rock;}
        }
        
        if(removeCount > n){right = mid - 1;}
        else{
            answer = mid;
            left = mid + 1;
        }
    }
    return answer;
}