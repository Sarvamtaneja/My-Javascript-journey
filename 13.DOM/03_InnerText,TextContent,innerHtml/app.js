// innerText
const p = document.querySelector("p");
console.log(p);  //showcases everything that is inside p tag (even the script tag as well)
console.log(p.innerText); //logs only the inner text of the tag p.

// textContent
console.log(p.textContent);  //logs everything inside p tag in text format and not tags. (eg. script and strong tag)

// innerHTML
console.log(p.innerHTML); //logs everything as it is in HTML

// changing the inner text
const h1 = document.querySelector("h1");
h1.innerText = "Text Changed :)";  //changes the inner text

// changing html
h1.innerHTML = "<em>Changing Html tags as well :p</em>"
