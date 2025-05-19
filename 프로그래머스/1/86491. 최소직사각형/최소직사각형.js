function solution(sizes) {
    sizes.forEach((a) => {
        a.sort((x,y) => x - y)
    });
    
    const maxWidth = Math.max(...sizes.map((a) => a[0]))
    const maxHeight = Math.max(...sizes.map((a) => a[1]))
    
    return maxWidth * maxHeight
}