// Creating Element
const h1 = document.createElement("h1");
console.log(h1);
h1.textContent = "Hello World";
console.log(h1.textContent);
h1.classList.add("greetings")

// append -> used to push that item on the web page
document.body.appendChild(h1);

const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I am a new list";

const firstLi = document.querySelector("li");
// insertBefore()
// selector.insertBefore(what,where)
ul.insertBefore(newLi, firstLi);
// ----------------------------------------------
const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I am an Italic text";
i.style.color="skyblue";
// insertAdjacentElement
firstP.insertAdjacentElement("beforebegin",i);
// firstP.insertAdjacentElement("afterbegin",i);
// firstP.insertAdjacentElement("afterend",i);
// firstP.insertAdjacentElement("beforeend",i);
// -----------------------------------------------

let section = document.querySelector("section");
const i2 = document.createElement("i");
const h4 = document.createElement("h4");
h4.innerText = "yoyoyoyo";
h4.style.color="teal";
i2.innerText = "hello";
i2.style.color="skyblue";

// section.append(i2,h4); //adds after the element
section.prepend(i,h4);  //adds before the elements

// ------------------------------------------------

// removing an element
const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");

newList.removeChild(fourth);

// newList.remove(); //removes everything under that class tag.