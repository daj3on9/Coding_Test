function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({priority, index}));
    let order = 0;
    
    while(queue.length > 0){
        const current = queue.shift();
        const top = queue.some(item => item.priority > current.priority)
        if(top){
            queue.push(current)
        }
        else{
            order++;
            if(current.index === location){
                return order
            }
        }
    }
    
}


