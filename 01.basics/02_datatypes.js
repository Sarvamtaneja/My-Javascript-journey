"use strict"; //Treat all js code as newer version 

// alert(3+3); //we are using nodejs , not browser

// number
// string => ""
// bigint
// boolean => true/false
// null => standalone value
// undefined => value not assigned
// symbol => unique 

// object

console.log(typeof "Sarvam" );

console.log(typeof null); //null is an object (although it should be a datatye . some consider this as a drawback of js)

console.log(typeof undefined);

let isTrue = false;
console.log(typeof isTrue); //boolean 

let num =10;
console.log(num + undefined);  //output => NaN (i.e Not a Number)

