// console.log(window);
// console.log(this);   //this always refers to the global variable and as there is nothing thus it is refereing to window.
console.log(this == window);  //true

window.firstName = "Sarvam";  //creating a variable in window.
this.lastName = "Taneja";
console.log(window);


const obj ={
    firstName : "Sarvam",
    lastName : "Taneja",
    fullName: function () {
        // return this;  //here 'this' uses the "owner" object.
        return `${this.firstName} ${this.lastName}` 
    },
    fullName2: ()=>{
        return this; // in arrow functions , this keyword always refers to window.
    }
};

const result = obj.fullName();
console.log(result);

const result2 = obj.fullName2();
console.log(result);


//-------------------------------------------------

// Challenge
const person = {
    name: "Alex Stilton",
    age: 19,
    greetRegular: function () {
        return `Hello my name is ${this.name}, I am ${this.age} years old`;
    },
    greetArrow:  () => {
        return `Hello my name is ${this.name}, I am ${this.age} years old`;
    }
};

console.log(person.greetRegular());
console.log(person.greetArrow());