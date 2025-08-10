// Default function parameters, introduced in ES6, allow you to assign default values to function parameters. When a function is called and an argument is not provided for a parameter , the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined. 

function countTo5(count = true){
    if (count == true) {
        for (let i = 1 ; i <= 5 ; i++) {
            console.log(`count: ${i}`);
        }
    }
};

countTo5();

// Challenge

function multiply(a,b=1){  //setting the default value of b=1
    return a*b;
}

const result = multiply(5);
console.log(result);