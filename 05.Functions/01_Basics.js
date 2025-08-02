// function is a block of code that performs a specific task
// Function makes the code reusable . You can declare is once and use it multiple times 
// Function makes the program easier as each small task is divided into a function
// /Function increases readability
// DRY - do not repeat yourself
// function name (parameterIfAny) {...}  

// Function declaration
function greet(){
    console.log("Hello from a function");
}

greet(); //calling a funnction

function sayHello(name){
    console.log(`hello ${name}`);
    // or
    // console.log("Hello"+ "" + name);
}

sayHello();   //Hello undefined as name is not defined 
sayHello("Sarvam");
sayHello("Alex") 


// Return -> function 

function add(x,y) {
    return x + y ;  //returning the data from the function 
}

add( 10, 20);  // would not give any out in terminal as we have not used console.log

console.log(add(10,20));

// or 
const result1 = add(10,15);  // storing the result from the function
const result2 = add(10,17);
const result3 = add(12,15);

console.log(result1);
console.log(result2);
console.log(result3);


// Challenge

function myFunction(p1,p2) {
    return p1*p2 ;
}

let x = myFunction(3,4);
console.log(x);


// function Expression 

const Namaste = function (user){
    console.log(`Namaste ${user}`);
}

Namaste("Sarvam"); 