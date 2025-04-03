function solution(participant, completion) {
    let playerCount = new Map()
    
    for(let p of participant) {
        playerCount.set(p, (playerCount.get(p) || 0) + 1)
    }
    //  console.log(playerCount)
    
    for(let c of completion) {
        playerCount.set(c, playerCount.get(c) - 1)
    }
    //  console.log(playerCount)
    
    for(let [key, value] of playerCount) {
        if(value > 0) return key
    }
}