const input = require('fs').readFileSync(0).toString().trim().split("\n");

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

if (a < 0 && b < 0) console.log(3);
else if (a < 0 && b > 0) console.log(2);
else if (a > 0 && b < 0) console.log(4);
else console.log(1);
