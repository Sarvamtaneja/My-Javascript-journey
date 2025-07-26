// if (condition) {...}
// else if (condition) {...}
// else {...}

let a = 100 ;
let b = 20 ;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
}else if (a < b) {
    console.log(`${a} is smaller than ${b}`);
}else {
    console.log(`${a} is equal to ${b}`); 
}

//challenge

let password;

if (password == 8) {
    console.log("Welcome");
} else if (password < 8) {
    console.log("Password is too short");
} else if (password > 8) {
    console.log("Password is too long");
    console.log("password should be 8 characters");
} else {
    console.log("Please eneter a password");
}