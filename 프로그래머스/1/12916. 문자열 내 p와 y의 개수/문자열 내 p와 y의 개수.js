function solution(s){
    const new_s = s.toLowerCase()

    let p_cnt = 0
    let y_cnt = 0
    
    for(let i of [...new_s]){
        if(i === 'p') p_cnt++;
        else if(i === 'y') y_cnt++;
    }
    
    return p_cnt === y_cnt
}