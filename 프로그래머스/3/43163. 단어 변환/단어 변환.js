function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    let queue = [[begin, 0]]; // 현재 단어부터 시작, 변환 단계 저장
    let visited = new Set(); // 중복 값이 없도록
    
    visited.add(begin)
    
    while(queue.length > 0){
        let [current, steps] = queue.shift();
        
        if(current === target) return steps
        
        for(let word of words){
            // 방문하지 않았으면서 한 개의 단어만 다를때
            if(!visited.has(word) && isOneLetterDifferent(current, word)){
                visited.add(word); // 방문 처리
                queue.push([word, steps + 1]); // 변환 단계 증가
            }
        }
    }
    
    return 0;
}

function isOneLetterDifferent(word1, word2){
    let diffCount = 0;
    for(let i = 0; i<word1.length; i++){
        if(word1[i] !== word2[i]) diffCount++;
        if(diffCount > 1) return false;
    }
    return diffCount === 1;
}