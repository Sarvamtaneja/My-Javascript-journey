// The spread operator is a new addition to the set of operators in js ES6. it takes in an iterable (eg. an array) and expands it into individual elements . Tspread operator is commmonly used to make shallow copies of js objects . Using this operator makes the code concise and enhances its readability .

function giveMe4(a,b,c,d){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);
};

giveMe4(1,2,3,4);
const colors = ["red","green","blue","yellow"];
giveMe4(colors);  //it gives undefined for b,c,d as it considers the array only for a. Now to fix this
// we will add ... infront of colors in parameter.
giveMe4(...colors);

// using spread operator in string
const strNums = ["one","two","three"];
const moreNums = ["four","five","six"];
const concat = [...strNums,...moreNums];

console.log(concat);


const people = ["jordan","Trevor","Alex"];
const allPeople = ["Kumar",...people,"John"];
console.log(allPeople);

