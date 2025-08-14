const person = [
    {name:"john", age:30},
    {name:"Joe", age:37},
    {name:"Alex", age:20},
    {name:"Peter", age:28},
    {name:"Alex", age:35},
];

const res = person.find(person => person.name == "Alex");  //finds alex
console.log(res);

// but find helper works to find only one . if there is another alex of age 35 after the first alex , it would not be found. 

const res2 = person.filter(person => person.name == "Alex");  //finds alex
console.log(res2);
// filter helper logs all the alex in the array.