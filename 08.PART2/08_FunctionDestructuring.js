// FUNCTION DESTRUCTURING

const person = {
    name: "John Doe",
    age: 20,
    country: "USA"
}

/*function printPersonInfo(person){
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Country: ${person.country}`);
}*/

// better way 
function printPersonInfo ({name,age,country}){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Countr: ${country}`);
}

printPersonInfo(person);

// NESTED DESTRUCTURING

const songs = [
    {name: "Dreamin", singer: "PARTYNEXTDOOR", duration: 2.29},
    {name: "Sparks", singer: "Coldplay", duration: 3.49},
    {name: "Bin-Tere", singer: "Vishal Shekhar", duration: 4.48},
    {name: "Die for you", singer: "The Weekend", duration: 3.55}
]

const [, , {singer}] = songs;  //[, , {(3rd object in array) lable}] 
console.log(singer);  