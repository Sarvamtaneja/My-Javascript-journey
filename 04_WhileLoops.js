// while (condition){
    // code block to be executed
// }

let i = 1   //necessary to specify

while (i <= 5) {
    console.log("Hello World", i);
    i++  //if not specified will give us an infinite loop
}

// inorder to make my variable (i) scoped only to the loop we can wrap it example-
{
    let i = 3

    while ( i <= 10) {
        console.log(i);
        i++
    }
}
// but the variable declared in for loop is already inside a block i.e it is in local scope.


// challenge
{
    let i =10

    while (i <= 100) {
        console.log("SArvam Taneja", i);
        i++
    }
}
