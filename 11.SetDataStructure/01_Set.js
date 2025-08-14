const initialValues = [1,2,2,2,2,3,4];
const mySet = new Set(initialValues);

console.log(mySet);  // set automatically removes the duplicated values.
console.log(mySet.has(88));  //false

mySet.add(88);
mySet.add(88);  // adds only unique values
console.log(mySet);
console.log(mySet.has(88));  //true

for (let item of mySet){
    console.log(item);
}

mySet.clear();  //clears everything 
console.log(mySet);