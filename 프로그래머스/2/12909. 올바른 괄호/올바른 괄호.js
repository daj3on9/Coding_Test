function solution(s) {
  const stack = [];
    
  for (let ch of s) {
    if (ch === '(') {
      stack.push(ch);
    } 
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
