// DOM SELECTORS

// getElementsByTagName
// document.getElementsByTagName("tag name")
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// getElementsById
// document.getElementById("id name")
console.log(document.getElementById("main"));

// getELementsByClassName
// doument.getElementByClassName("class name")
console.log(document.getElementsByClassName("cls"));

// querrySelector
// document.querrySelector("tag name or .className or #IdName")
console.log(document.querySelector("h1"));
console.log(document.querySelector("li"));
console.log(document.querySelector("#main"));

// querrySelector can not select multiple elements , i.e if there are a lot of elements with class = "cls" then querrySelector would select only the forst element and leave the rest.

// first 3 selectors select all the elements with same tag , class or id.

// querrySelectorAll()
// querrySelectorAll("tagName or .className or #IdName")
console.log(document.querySelectorAll("li"));

// storing in variables

const h1 = document.querySelector("h1");
console.log(h1);

const li = document.querySelectorAll("li");
console.log(li);