function solution(numbers) {
    let sum = numbers.reduce((sum,num) => sum + num, 0)
    return 45 - sum;
}
