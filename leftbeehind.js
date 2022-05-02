

const readline = require('readline');

var result;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var x = parseInt(nums[0]);//sweet
    var y = parseInt(nums[1]);//sour
    /*Solve the test case and output the answer*/

    //more jars of sour honey than sweet, he will be left “beehind”
    //more jars of sweet honey than sour he will go to the convention
    //the same number of sweet and sour jars, his friends are undecided.
    //exactly 13 jars they will never speak to him again
    //Input is terminated by a line containing two zeros, which should not be processed

    if(x == 0 && y == 0 ){
        rl.close();
    }
    else if(y+x == 13){
        console.log("Never speak again.");
    }
    else if(y>x){
        console.log("Left beehind.");
    }
    else if(x>y){
        console.log("To the convention.");
    }
    else if(y == x){
        console.log("Undecided.");
    }
    

});





