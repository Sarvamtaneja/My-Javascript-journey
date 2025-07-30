// OBJECTS -> can store data with a key or lables or property

const person = {
    firstName : "Sarvam",
    lastName : "Taneja",
    age : 19,
    location : ["Planet","Earth"],
    isProgrammer : true,
};

console.log(person);
console.log(typeof person);

//accessing items from our object 
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location);
console.log(person.isProgrammer);

// console.log(person[firstName]);  // cannot be done as firstName variable is not in global scope , it is in local scope

console.log(person["age"]); //it works after writing it in ""

// adding properties to object

person.learning = "JavaScript"
console.log(person);

delete person.location; //to delete a property
console.log(person);


//challenge
const car = {
    type : "BMW",
    model : "2 series",
    color : "Black",
};

console.log(typeof car);

console.log(car.type = "Toyota");  //updating the property

car.wheels = 4;

console.log(car);