const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const [N, L] = input.shift().split(' ');
let arr = input.map(e => e.trim());

let set = new Set(arr.reverse())
let answer = [...set].reverse().slice(0, N).join('\n')
console.log(answer)
