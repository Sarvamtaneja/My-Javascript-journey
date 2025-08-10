// for..in loop

let person = {
    name: "Alex",
    age: 24,
    gender: "Male"
}

for(let keys in person){
    // console.log(keys);  //logs all the lables
    console.log(keys,person[keys]);
}

// For arrays
let list = ["one","two","three","four"];

for(let index in list){
    console.log(`${index} : ${list[index]}`);
}