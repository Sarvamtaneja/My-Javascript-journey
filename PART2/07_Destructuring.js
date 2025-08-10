// Destructuring allows us to "unpack" values form data strutures (arrays,objects) into seperate distinct variables. 


// ARRAY DESTRUCTURING
// In array destructuring , the name does not matter but the order does.
// traditional way 
const arr1 = ["one", "two","three","four"];
// extracting or unpacking values 
const firstValue = arr1[0];
console.log(firstValue);   //and so on 

// Destructuring
const arr2 = ["five","six","seven","eight"];
// unpacking or extracting
const [a,b,c] = arr2 ;
console.log(a);
console.log(b);
console.log(c);

let x,y ;

[x =7 ,y = 6] = ["eight"];  //here we provided x and y a default value so , when there is nothing to store from the array , it will display the default value. 
console.log(x);
console.log(y);

// extractinc from a funtion
function f(){
    return [1,2];
}

let p,q;
[p,q] = f();
console.log(p);
console.log(q);

// ignoring a value
function func(){
    return [3,4,5];
}
const [l, ,m] = func();
console.log(l);
console.log(m);

// Assigning the rest of the array to a variable
const [one, ...two] = ["John","Alex","Henry",true,12,false,["Hello","Namaste"]];
console.log(one);
console.log(two);

// OBJECT DESTRUCTURING

// In object destructuring , the order does not matter but the nake does.

const student = { name1: "Sarvam", year: "second year", age1:18}; 
// extracting values

const {studentName} = student;
console.log(studentName); 
//output comes out to be "undefined" as in object destructiong we have already lablled the data as name year age and tu extract that we have to use that lable.

const {name1,year,age1} = student;
console.log(name1);
console.log(year);
console.log(age1);

// Challenge
// to extract name , age and country from the object

const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA"
}

const {name,age,country} = person;
console.log(name); 
console.log(country); 
console.log(age); 


const obj = {
    x:"hello",
    y:"hi"
}

const {x: new1 , y: new2} = obj;

// console.log(x);  // will not give an output as x lable has now been changed to new1.
console.log(new1);

// Object destructuring and rest operator 

let {num1,num2, ...rest} = {num1:100, num2:200, g:300, h:400, i:500, j:600};
console.log(a);
console.log(b);
console.log(rest);

// the ...rest operator stores the rest of the values in object in itself as an object. 