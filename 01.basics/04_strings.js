// strings
let firstName = "Sarvam"
let secondName = "Taneja"

// let fullName = firstName + " " +  secondName ; //" " is added to add space 


// 1. concatenation
let fullName = firstName.concat(secondName);
console.log(fullName);



// 2. Append (add something to the variable)
firstName += " something else";

console.log(firstName);


// 3. length(tells the length of string )
console.log(secondName.length);


// 4. cases (uppercase or lowercase)
console.log(firstName.toLowerCase()); //converts every letter to lowercase
console.log(secondName.toUpperCase()); //empty bracket is required


// 5.slice (mentioned starting and end point jitna word dikhta hai)

console.log(firstName.slice(0, 4)); // slice(start(number), end(number)) 0 is the first letter or space for eg in "Sarvam" , "S" is 0 .

console.log(secondName.slice(2,6));


// 6. Split & Join 
// split seperates the string and return it as an array.
// join joins the elements of array into a string.

console.log(firstName.split("")); // if no space added in "" then eacgh letter of the string becomes an element of the array.
console.log(firstName.split(" ")); //If we add a space in " " then each word in string will become an element of the array.

console.log(firstName.split(" ").join("")); // "" joins without any space in between
console.log(firstName.split(" ").join("-")); //"-" add - in places of space
console.log(firstName.split("").join(" ")); //adds space after every letter i.e element of array
console.log(firstName.split(" ").join(" "));// adds space only in the places of space in original string.


// 7. Includes (tells us if the string includes certain words or letters)
console.log(secondName.includes("n")); //true
console.log(firstName.includes("A")); //false

// 8. Trim
let untrimmedWord = "       hello       ";
console.log(untrimmedWord);
console.log(untrimmedWord.trim());


/*-------------------------------------------------------------------------------------------------------*/
//task
let newName = `${firstName} ${secondName}`;
console.log(newName);

let favActorFirstName = "Ranbir"
let favActorLastName = "Kapoor"
let favActorFullName = favActorFirstName + " " + favActorLastName 
let uppercase = favActorFullName.toUpperCase()
console.log(favActorFullName)
let message = `My favourite actor is ${uppercase}, `
message += `his best movie is Rockstar`; //append
console.log(message);