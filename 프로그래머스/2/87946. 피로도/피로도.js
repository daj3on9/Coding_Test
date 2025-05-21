function solution(k, dungeons) {
   let answer = 0;
    
    function dfs(hp, visited, count){
        answer = Math.max(answer, count);
        
        for(let i = 0; i < dungeons.length; i++){
            const [minHp, usedHp] = dungeons[i];
            if(!visited[i] && hp >= minHp) {
                visited[i] = true;
                dfs(hp-usedHp, visited, count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, Array(dungeons.length).fill(false), 0);
    
    return answer
}