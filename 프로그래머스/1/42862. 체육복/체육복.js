function solution(n, lost, reserve) {
    // 진짜 도난 당한 학생
    const realLost = lost.filter(l => !reserve.includes(l))
    
    // 진짜 여벌만 있는 학생
    const realReserve = reserve.filter(r => !lost.includes(r))
    
    // 학생 번호 순서대로 정렬
    realReserve.sort((a,b) => a-b)
    realLost.sort((a,b) => a-b)
    
    for(let i=0; i < realReserve.length; i++){
        const lender = realReserve[i]
        const front = realLost.indexOf(lender - 1) // 앞번호 선택
        const back = realLost.indexOf(lender + 1) // 뒷번호 선택
        if(front !== -1){
            realLost.splice(front, 1)
        } 
        else if(back !== -1){
            realLost.splice(back, 1)
        }
    }
    
    return n - realLost.length;
    
}