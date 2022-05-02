const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//declare array to store
var lineArray = [];


//this is the way to combine all the lines read into an array
rl.on('line', (line) => {
    lineArray.push(line);//combining all the lines to an array
}).on('close', () => {//below is to do whatever we want to do 
    //give the array of lines the index each letter belongs to using a for loop
    //declare array to store the index
    var strArray = [];
    for (var i = 1; i <= lineArray[0]; i++) {
        strArray.push(lineArray[i]);
    }

    //sort the array 
    //we clone the array cos we want to keep the original array for comparison later 
    const strSorted = [...strArray].sort(); // [...arrayName] --> this is to clone the array , if we sort the original array , it will change
    const strReverse = [...strSorted].reverse();//to reverse the order 
 
    //if else to check
    //if original array == to strSorted --> increase ,,as sort function will rearrange elements according from small to big
    //else if original == to strReversed --> decrease ,, as reverse will rearrange the elements from big to small 
    //else none --> means neither
    //we cannot directly compare , must stringify the array first to string and compare the string instead
    if (JSON.stringify(strSorted)==JSON.stringify(strArray)) {
        console.log("INCREASING");
    } else if (JSON.stringify(strReverse)==JSON.stringify(strArray)) {
        console.log("DECREASING");
    } else {
        console.log("NEITHER")
    }


});

















// const { Console } = require('console');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// //declare array to store
// var strArray = [];


// //this is the way to combine all the lines read into an array
// rl.on('line', (line) => {
//     strArray.push(line);//combining all the lines to an array
// }).on('close', () => {//below is to do whatever we want to do 
//     //give the array of lines the index each letter belongs to using a for loop

//     //sort the array 
//     const strSorted = [...strArray].sort(); // [...arrayName] --> this is to clone the array , if we sort the original array , it will change
//     const strReverse = [...strSorted].reverse();//to reverse the order 
//     console.log(JSON.stringify(strSorted));
//     console.log(JSON.stringify(strReverse));
//     console.log(JSON.stringify(strArray));
//     //if else to check
//     //if original array == to strSorted --> increase ,,as sort function will rearrange elements according from small to big
//     //else if original == to strReversed --> decrease ,, as reverse will rearrange the elements from big to small 
//     //else none --> means neither
//     //we cannot directly compare , must stringify the array first to string and compare the string instead
//     if (JSON.stringify(strSorted)==JSON.stringify(strArray)) {
//         console.log("INCREASING");
//     } else if (JSON.stringify(strReverse)==JSON.stringify(strArray)) {
//         console.log("DECREASING");
//     } else {
//         console.log("NEITHER")
//     }

// });









// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var arr;
// let i = 0;
// rl.on('line', (line) => {
//     if (!arr) {
//         arr = new Array(line);
//     } else {
//         // var array=line.split('')
//         // console.log(array)
//         arr[i++] = line;
//     }
//     if (line == "quit" || line == "") rl.close();
// }).on('close', () => {
//     const sorted = [...arr].sort();
//     console.log([...arr].reverse())
//     const reverse = [...sorted].reverse();
//     if (JSON.stringify(sorted)==JSON.stringify(arr)) {
//         console.log("INCREASING");
//     } else if (JSON.stringify(reverse)==JSON.stringify(arr)) {
//         console.log("DECREASING");
//     } else {
//         console.log("NEITHER")
//     }
// })

