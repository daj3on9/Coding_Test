function solution(a, b) {
    var aw1 = Number(`${a}`+`${b}`);
    var aw2 = Number(`${b}`+`${a}`);
    
    return aw1 >= aw2 ? aw1 : aw2;
}