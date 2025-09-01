function CreatePerson(firstName,lastName,pl){
    this.firstName = firstName 
    this.lastName = lastName
    this.pl = pl
}   //in Constructor function the first letter of the function name should always be CAPITAL. 


// NEW KEYWORD
/*1. first create empty bracket
2. Sets "this" to point to that object
3. We can omit the return statement using "new" keyword.*/

const John = new CreatePerson("John","Doe","Golang");
const Alex = new CreatePerson("Alex","Stilton","JavaScript");
console.log(John);
console.log(Alex);


// Built-in constructor function
// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

const num1 = new Number(10);
const str1 = new String("Sarvam Taneja");
const bool1 = new Boolean(false);
const arr1 = new Array(1,2,3);
console.log(num1);  //automatically becomes a constructor function.
console.log(str1);
console.log(bool1);
console.log(arr1);