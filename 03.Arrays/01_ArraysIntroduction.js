// Arrays -> 0 index based

// empty array 
const myList = [];
console.log(myList);

// storing values
const numbersArray = [1,2,3,4,5];
console.log(numbersArray);

const stringArray = ["eat", "code", "sleep", "repeat"];   //0 index based (eat-0,code-1,sleep-2,repeat-3)
console.log(stringArray);

//Accessing items from array 
console.log(stringArray[0]);  //0 is the index of eat
console.log(stringArray[3]); //3 is the index of repeat

/*-------------------------------------------------------------------------------------------------------*/

// nested array or two dimension array
const nestArr = ["one", ["two", "three"], 1, true, false ];
console.log(nestArr);
console.log(nestArr[1]); 
console.log(nestArr[1][0]);  //inorder to access the items inside the nested array



// Challenge

const favSingers = ["Arijit Singh", "Mohit Chauhan", "The Weekend" ]; //storing strings in an array
console.log(favSingers[0]);   //logging the first singer

const favNumbers = [7,8,10,13]; // storing numbers in an array
console.log(favNumbers);

const mixedArr = ["string", ["other Array"], 123, true]; //making a nested array
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]); //logging every element of the array
