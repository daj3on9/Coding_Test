function solution(clothes) {
    let obj = {}
    for (let i = 0; i < clothes.length; i++){
        const cloth = clothes[i]
        if (obj[cloth[1]]){
            obj[cloth[1]]++
        }else{
            obj[cloth[1]] = 1
        }
    }
    
    const value = Object.values(obj).map(item => item + 1).reduce((acc, cur) => acc * cur, 1)
   
    return value - 1;
}