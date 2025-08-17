let firstLi = document.querySelector("li");  //querry selector selects the firts element
console.log(firstLi);
console.log(firstLi.parentElement); // parent element of li
console.log(firstLi.parentElement.parentElement); //parent element of ul
console.log(firstLi.parentElement.parentElement.parentElement); //parent element of body

let ul = document.querySelector("ul");
console.log(ul.children); //children element of ul
console.log(ul.children[0]); 
console.log(ul.children[1]); 
console.log(ul.children[2]); 
console.log(ul.children[3]); 
console.log(ul.children[4]); //undefined as there are only four li and till index 3

ul.children[0].innerText = "changed inner text of first li"

// all the li tags are eachothers siblings , i.e all the tags under the same parent tag are siblings
// for eg , body tag and head tag are siblings (under html tag) , but any tag inside body and html are not necessarily siblings 

console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);  //shows error

let fourthLi = document.querySelector(".fourth");

console.log(fourthLi.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling.textContent);