let one = document.querySelector(".click");
one.addEventListener("click",()=>{
    one.classList.toggle("red");
});


let two = document.querySelector(".contextmenu");  //changes the color on right clicking
two.addEventListener("contextmenu",()=>{
    two.classList.toggle("blue");
});


let three = document.querySelector(".dblclick");
three.addEventListener("dblclick",()=>{
    three.classList.toggle("teal");
});


let four = document.querySelector(".mousedown");  // same as click but on and off type
four.addEventListener("mousedown",()=>{
    four.classList.toggle("steelblue");
});


let five = document.querySelector(".mouseenter");  // hover mouse over it 
five.addEventListener("mouseenter",()=>{
    five.classList.toggle("orange");
});


let six = document.querySelector(".mouseleave");
six.addEventListener("mouseleave",()=>{
    six.classList.toggle("purple");
});


let seven = document.querySelector(".mousemove"); //when mouse moves over it.
seven.addEventListener("mousemove",()=>{
    seven.classList.toggle("pink");
});


let eight = document.querySelector(".mouseout");
eight.addEventListener("mouseout",()=>{
    eight.classList.toggle("crimson");
});


let nine = document.querySelector(".mouseover");
nine.addEventListener("mouseover",()=>{
    nine.classList.toggle("chocolate");
});


let ten = document.querySelector(".mouseup");
ten.addEventListener("mouseup",()=>{
    ten.classList.toggle("aqua");
});