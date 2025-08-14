// syntax:
//  reduce(a,b) : where a is the callback function and b is the starting value 

const num = [1,2,3,4,5,6,7];

const sum = num.reduce((p,c) => {
    console.log(`Previous value : ${p}`);
    console.log(`Current value : ${c}`);
    return p+c
    // 0+1 => 1
    // 1+2 => 3
    // 3+3 => 6
    // .
    // .
    // 21+7 => 28 = sum
}, 0); 
// The 0 we provided here was the previous value. 
// everytime the function progresses to the next value the value of p becomes p+c 
// C is the current value or the value at the current index of the array. 

console.log(sum);


let peoples  = [
    {firstName:"John Doe", age:30},
    {firstName:"Benjamin Stalin", age:43},
    {firstName:"Peter Parker", age:25}
]

const oldestAge = peoples.reduce((p,c)=> (c.age> p ? c.age : p), 0);
console.log(oldestAge);


const words = [
    "apple",
    "banana",
    "Pineapple",
    "Orange",
    "apple",
    "banana",
    "Pineapple",
    "Orange"
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = frequencyMap[word] || 0 + 1;
    return frequencyMap;
}, {});

console.log(wordFrequency);


//CHALLENGE

const numbers = [2,3,4,5];

const multiple = numbers.reduce((p,c) =>{
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p*c;
},1);
console.log(multiple);