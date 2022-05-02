const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var numsPill = parseInt(line);

    /*Solve the test case and output the answer*/

    var hide = true;
    var bombCount = 0;

    do {
        if(numsPill > 0){
          bombCount++;  
        }else{
            return;
        }
        
        //after bomb --> 3 pillar damage (this is the number of pillar available to hide)
        numsPill -= 3;
        //check if can hide 
        if (numsPill > 1 || numsPill == 1) {//as long as there is one pillar or more , he can hide
            hide = true;
        } else {
            hide = false;
        }

        //after the bomb --> 2 pillar will recover
        numsPill += 2;
        
    } while (hide);

    console.log(bombCount);


});






