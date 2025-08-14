// when we call the forEach helper we pass in anonymous callback function,
// This function function gets called one time for every element in the array.
// Whatever is inside the function that logic happens.

const colors = ["teal","blue","yellow","Indigo"];

colors.forEach((color) => console.log(color));


// Challenge

let numbers = [1,2,3,4,5,6];

let sum = 0;

function adder(number) {
    sum += number
}

numbers.forEach(adder);
console.log(sum);