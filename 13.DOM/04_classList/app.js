const h1 = document.querySelector("h1");
console.log(h1.classList); //lists all of the classes given to the tag

// add()
const h2 = document.querySelector("h2");
h2.classList.add("styles");

// removing a class
// remove()
h1.classList.remove("box");

// toggle()
h2.classList.toggle("box");
// adds a class if it is not present and removes it if it is present 
h2.classList.toggle("styles");