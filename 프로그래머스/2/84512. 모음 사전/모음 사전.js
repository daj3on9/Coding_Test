function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    const dict = []
    
    function dfs(current){
        dict.push(current)
        if(current.length === 5) return
        
        for(let i = 0; i < vowels.length; i++){
            dfs(current + vowels[i])
        }
    }
    
    dfs("")
    return dict.indexOf(word)
}