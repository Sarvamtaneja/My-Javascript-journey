// The every() helper check wether every element in the array passes the condition or not. It returns true if every element passes the condition and false if any element fails.

// The some() method checks if atleast one element in he array passes the condition provided in the callback function. It returns true if atleast one element passes the condition and false if no element passes the condition. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const peoples = ["Alex","Adam","Eve","Jordan","Alok"];

const res1 = peoples.every((people) => people.length == 4);
console.log(res1);  // false as only 4 out of 6 names have length = 4

const res2 = peoples.some((people) => people.length == 4);
console.log(res2); // true as 4 names out of 6 have length = 4 

const res3 = peoples.some((people) => people.length < 3);
console.log(res3);  // false as no name length is < 3