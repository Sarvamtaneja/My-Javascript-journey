// Bad way 2
const secondBtn = document.querySelector(".second-btn");
secondBtn.onmousemove = function(){
    console.log("hello");
}

// Great way
const best = document.querySelector(".best");

/*best.addEventListener("click",()=>{
    console.log("hola!");
});*/

function hola(){
    console.log("hola!");
};

best.addEventListener("click",hola);

// Event (e) object

const para = document.querySelector(".para");
para.addEventListener("click",(event)=>{
    console.log(event);
})

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit",(event)=>{
    event.preventDefault();  //to prevent the auto reload of the web page
    console.log(event);
    console.log(input.value);
});
