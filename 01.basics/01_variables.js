const accountId = 14453;
let accountEmail = "sarvam@gmail.com" ;
var accountPassword = "st@123";
accountCity = "Noida" ;
let accountState ;

// account_id= 2; //not allowed . won't change anything and also would show errors.

accountEmail = "st@gmail.com";
accountPassword = "123";
accountCity="Patna";

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);

let FirstFavNumber = 7;
let SecondFavNumber = 8;

console.log(FirstFavNumber + SecondFavNumber);
console.table([FirstFavNumber-SecondFavNumber, FirstFavNumber*SecondFavNumber, FirstFavNumber/SecondFavNumber, FirstFavNumber%SecondFavNumber]);