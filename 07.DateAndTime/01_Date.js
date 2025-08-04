const currentDate = new Date();
console.log(currentDate);

// providing specific value to the date.
// year , month , day , hours , minutes ,seconds , milliseconds

const customDate = new Date(2026,4,24,18,45,34,45);
console.log(customDate);

const Year = customDate.getFullYear();
console.log(`Year: ${Year}`);

const Month = customDate.getMonth();
console.log(`Month: ${Month}`);

const Day = customDate.getDay();
console.log(`Day: ${Day}`);

//  similarly

const hours = customDate.getHours();
const minutes = customDate.getMinutes();
const milliseconds = customDate.getMilliseconds();

// loging date in string

console.log(customDate.toDateString());
console.log(customDate.toISOString());
console.log(customDate.toLocaleDateString());

// setting a date 

const date = new Date();

date.setDate(date.getDate() + 1); //next date
console.log(date);