/* String templates are , also known as template literals , are a feature in javascript that allows you to create strings with embedded expressions . They are denoted by backticks `` instead of single or double quotes . Template strings provide a lot more flexible and concise way to comstruct strings , especially when they involve variables or expressions */

/*console.log("HEllo my name is Sarvam ,
    i am learning javascript");*/    //gives error with " " and ''

console.log(`Hello my name is Sarvam , 
    I am learning javaScript`);  //gives no error and the output comes out in different lines as written inside backticks ``.

const firstName = "Sarvam";
const secondName = "Taneja";

console.log(`Hi my name is ${firstName} ${secondName}`);

function info(){
    return `Hi my name is SArvam & I am 19 years old.`
};

console.log(`${info}`);  // logs the entire code
console.log(`${info()}`);  