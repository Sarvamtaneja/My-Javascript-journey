//for loops
// for (initialExpression; condition; incrementExpression or decrementExpression) {}


for (let i=0 ; i <= 5; i++) {
    console.log("Hello World", i);
}


for (let i = 1; i <= 10; i++ ) {
    console.log("--- outer loop ---", i);
    //nested loop
    for (let j = 1; j <= 5; j++ ) {
        console.log("--- inner loop ---", j);
    }
}


// Challenge

for (let i = 0; i <= 1000; i++) {
    console.log("Sarvam Taneja", i);
}