function solution(arr) {
    let min = Math.min(...arr);
    let new_arr = arr.filter((num) => num !== min); 
    return new_arr.length ? new_arr : [-1];
}
