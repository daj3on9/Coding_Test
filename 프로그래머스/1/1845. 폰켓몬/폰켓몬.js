function solution(nums) {
    const pick = Math.floor(nums.length/2);
    let pocketmon = [...new Set(nums)].length
    
    return pick > pocketmon ? pocketmon : pick
}