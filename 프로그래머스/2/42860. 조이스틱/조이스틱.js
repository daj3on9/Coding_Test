function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;
    
    for(let i = 0; i < name.length; i++){
        const charCode = name.charCodeAt(i); // 문자 아스키코드로 추출
        answer += Math.min(charCode - 65, 91-charCode);
        
        let next = i + 1;
        while(next < name.length && name[next] === 'A'){
            next++;
        }
        
        minMove = Math.min(minMove, (i*2+name.length - next), ((name.length - next)* 2 + i))
    }
    return answer + minMove
}