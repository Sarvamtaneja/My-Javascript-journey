// 1. Logical AND operator (&&)
// - TRUE if both the operands/boolean values are true , else evaluates to FALSE.

const a = true ;
const b = false;
const c = 4;

console.log(a&&b); //false
console.log(c > 2 && c < 2);  //false

// 2. Logical OR operator (||)
// - TRUE if either of the operands/boolean values are true , evaluates to FALSE if both are false. 

console.log(a||b);  //true
console.log(b||b);  //false
console.log(c > 2 || c < 2);  //true

// 3. Logical NOT operator (!) 
// TRUE if operands/boolean is false and vice-versa.

console.log(!a);  //false (as it was true)
console.log(!b);  // true


// usage 
let password = "Sarvam_Taneja"

if (password.length >= 8 && password.includes("Taneja")) {   //using logical AND operator
    console.log("Valid password");
} else {
    console.log("Invalid password");
}