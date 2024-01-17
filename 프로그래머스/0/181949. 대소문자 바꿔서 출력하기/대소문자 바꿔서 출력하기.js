const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close',function(){
    for(let i = 0; i<input.length; i++){
        if(input[i] === input[i].toLowerCase()){
            input[i] = input[i].toUpperCase();
        }
        else{
            input[i] = input[i].toLowerCase();
        }
    }
    console.log(input.join(''));
});