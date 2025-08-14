// The map() method creates a new array populated with the results of a provided function on every element in calling array.

let numbers = [1,2,3,4,5];

let double = numbers.map((num) => num*2);
console.log(double);

// forEach modifies our existing array while map helper does not modify our existing array , instead it creates a new array. 
console.log(numbers);

let peoples  = [
    {firstName:"John", secondName:"Doe"},
    {firstName:"Benjamin", secondName:"Stalin"},
    {firstName:"Peter", secondName:"Parker"}
]

const result = peoples.map(person => {
    return [person.firstName, person.lastName]
})

console.log(result);