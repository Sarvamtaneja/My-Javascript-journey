const fs = require("fs");

// creating our own synchronous function
function SarvamReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("b.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

// callback function to be called 
function onDone(data){
    console.log(data);
}

const a = SarvamReadsFile();
a.then(onDone);
// SarvamReadsFile().then(onDone);


// ASYNC AWAIT

function SarvamsAsyncFunction(){
    let p = new Promise (function(resolve) {
        setTimeout(function() {
        resolve("hi there")
        },3000)
    });
    return p;
}

async function main(){
    // any function that wants to use await has to be an async function. 
    let value = await SarvamsAsyncFunction();  //intead of using .then we use await before and get the final value in variable. 
    console.log(value);
    console.log("Hi there 2");
}

main();
console.log("After main");