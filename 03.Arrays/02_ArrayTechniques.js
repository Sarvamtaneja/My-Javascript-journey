// learning the use of various functions

const fruits = [
    "apple",
    "Mango",
    "Banana",
    "grapefruit",
    "Strawberries",
    "Pomegrenate"
];

console.log(fruits.length);
fruits.push("Pineapple")  //push adds a new element in the end of an array and returns the new length of an array

console.log(fruits);
console.log(fruits.length);

fruits.pop();  //pop() removes the last element from an array 
console.log(fruits);
console.log(fruits.length);

fruits.shift(); //shift() removes the first element from an array.
console.log(fruits);
console.log(fruits.length);

fruits.unshift("Oranges");  //unshift() allows us to insert a new element in the start of an array.
console.log(fruits);

const fancyFruits = ["kiwi", "Avocado", "Jackfruit"];

const totalFruits = fruits.concat(fancyFruits);

console.log(totalFruits);

console.log(fancyFruits.includes("kiwi"));  //gives true or false
console.log(fancyFruits.join("@")); //joins all the elements of the array with ""
console.log(fruits.join("-"));

console.log(fancyFruits.reverse());  //reverses the order of array

console.log(fancyFruits.slice(0,2)); //slice(starting index, ending index)
console.log(totalFruits.slice(3,8));

const numbers = [5,4,2,1,3];
console.log(numbers);
console.log(numbers.sort()); //used to sort the array in numbers or in alphabetcal order.