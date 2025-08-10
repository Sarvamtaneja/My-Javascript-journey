// The terinary expression in js is a concise way of writiing conditional expressions . It is the only javascript operator that takes three operands: a condition followed by a question mark (?) , an expression to execute if the condition is true , followed by a colon (:), and an expression to execute if the condition is false.

// condition? exprIfTrue: exprIfFalse;

let password = 2;

function passwordChecker(ps){
    /*if(ps == 8){
        return `Strong password`;
    } else {
        return `Password must be 8 characters`
    }*/

   // using ternary operator
   return ps == 8 ? `Strong password`: `The pasword should be 8 characters`; 
}

const res = passwordChecker(password);
console.log(res);