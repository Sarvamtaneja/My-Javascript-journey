function findSum(n){
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans += i;
    }
    return ans;
}

function sumTill100(){
   console.log(findSum(100));
}

setTimeout(sumTill100, 1000);  //logs after 1 sec. 
console.log("hello world");

// another async function is fs.readfile and fetch

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    if (err) {
    console.error("Error reading file:", err);
    return;
  }
    console.log(data);
})

console.log("Hi there"); //logs before readFile as readfile is an async function.

let b=0 ;
for (let i=0 ;i<1000000000;i++){
    b++
}  //this is a very time consuming function

console.log("hi there 2");   //i agains logs before the async function as the async functions can wait for the thread to complete even if their task has been completed. 