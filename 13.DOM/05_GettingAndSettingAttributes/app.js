// href
const a = document.querySelector("a");
const input = document.querySelector("input");

// getting attributes
console.log(a.href);
console.log(input.value);
console.log(input.type);

// setting attributes
// changing href
a.href="https://www.youtube.com";
a.textContent = "youtube";
// input.value = "BYE";
input.placeholder="enter your youtube account"

// getAttribute(attrName)
console.log(input.getAttribute("placeholder"));
console.log(input.getAttribute("type"));

// setAttribute(attrName,value)
console.log(input.setAttribute("type","password"));
console.log(input.getAttribute("type"));
console.log(input.setAttribute("placeholder","enter password"));
