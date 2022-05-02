const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var n = parseInt(nums[0]); // a is the number of person
    var m = parseInt(nums[1]);//b is the number of chicken
    /*Solve the test case and output the answer*/

    //if the number of person is more than the chicken --> not enough chicken 
    if (n > m) {
        if (n - m == 1)
            console.log("Dr. Chaz needs " + (n - m) + " more piece of chicken!");
        else
            console.log("Dr. Chaz needs " + (n - m) + " more pieces of chicken!");
    }
    else {//else the chicken is enough
        if (m - n == 1)
            console.log("Dr. Chaz will have " + (m - n) + " piece of chicken left over!");
        else
            console.log("Dr. Chaz will have " + (m - n) + " pieces of chicken left over!");
    }


});