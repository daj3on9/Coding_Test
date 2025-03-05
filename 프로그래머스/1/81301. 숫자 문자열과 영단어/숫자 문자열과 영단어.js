function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    words.forEach((word, i) => {
        s = s.replaceAll(word, i);
    });
    
    return parseInt(s);
}