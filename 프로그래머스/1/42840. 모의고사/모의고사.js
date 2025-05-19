function solution(answers) {
    const tester = [
        [1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]
    ];
    
    
    const scores = tester.map((pattern) => {
        return answers.filter((answer, idx) => 
              answer === pattern[idx % pattern.length]).length;
      });
    
    const maxScore = Math.max(...scores);
    
    return scores
        .map((score, index) => (score === maxScore) ? index + 1 : null)
        .filter((v) => v !== null)
}