function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var numer = numer1 * denom2 + denom1 * numer2;
    var denom = denom1 * denom2;
    
    var a = numer;
    var b = denom;
    
    //유클리드 호제법
    var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
    answer[0] = a / gcd(a, b);
    answer[1] = b / gcd(a, b); 
    
    return answer;
}