const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var a = reverseNum(nums[0]);
    var b = reverseNum(nums[1]);
    /*Solve the test case and output the answer*/

    //compare see which is bigger 
  if(a > b){
      console.log(a);
  }else{
     console.log(b);
  }
});

//function to reverse the number
function reverseNum(number) {return parseInt(number.toString().split('').reverse().join(''))*Math.sign(number)};