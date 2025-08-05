// Arrow functions , also known as fat arrow functions are a concise and shorter way to define functions in javascript. They were introduced in ECMAscript 6 (ES6) and provide a more compact syntax compared to traditional function expressions.

// Traditional function

/*function greet(username) {
    return `Hello ${username};`
}

console.log(greet("Sarvam"));*/

// Arrow function

greet = (username) => `Hello ${username}`;  

console.log(greet("Sarvam"));

// for multiple lines of code we have to include curly brackets while for the single line we can omit them.
/* => {
line one 
line two 
line three 
}*/

const double = (number) => number*2; // we can write this without using constant and also with {}. we can also remove (for single parameter).

console.log(double(4));


// challenge 
// to convert set timeout to arrow function

setTimeout(()=>{console.log("This function will execute after 2 seconds");},2000);

setTimeout(()=>{
    console.log("hello");
    setTimeout(()=>{
      console.log("hey");
      setTimeout(()=>{
         console.log("namaste");
         setTimeout(()=>{
             console.log("hi");
             setTimeout(()=>{
                 console.log("bonjour");
                },2000);
            },2000);
        },2000);
    },2000);
},2000);