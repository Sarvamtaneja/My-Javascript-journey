// When we provide a function as an (argument) to another function , the function is known as callback function.

function showCallFunc(fn){
    const value = 10;
    fn(value);
}

showCallFunc(function(value){
    console.log(value);
});

function greet(name , cbf){
    console.log(`Hello ${name}`);
    cbf()
};

function cbf() {
    console.log("I am a callback function");
}; //we can also write this function while calling greet in the parameters in place of cb.

greet("John", cbf);

// Challenge
function ChallengeFnc(fn){
    const value1 = 25;
    fn(value1);
}

function fn(value1){
    console.log(value1);
}

ChallengeFnc(fn);