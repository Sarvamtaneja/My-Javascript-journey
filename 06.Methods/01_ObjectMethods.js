function greet(){
    return `Hello my name is ${person.name} & I am ${person.age} years old.`;
};

const person = {
    name: "Salman Khan",
    age: 54 ,
    greet,
};

console.log(person.greet());

// or

const person2 = {
    name: "Sarvam Taneja",
    age: 19,
    namaste: function (){
        return `Namaste my name is ${person2.name} & I am ${person.age} years old.`;
    }
}

console.log(person2.namaste());

// JSON - Java Script Object Notation

const person3 = {  
    name : "Raju Batliwala",
    age : 19,
    gmail : "rjbatliwala@gmail.com",
    isLearningJS: true,
    hobbies: ["coding","listening music"],
    address: {
        city: "New york",
        country: "USA"
    }
};
const JSONstring = JSON.stringify(person3); //used to convert the object to a JSON prompt.
console.log(JSONstring);  
console.log(JSON.parse(JSONstring));  //used to convert the JSON command to object.