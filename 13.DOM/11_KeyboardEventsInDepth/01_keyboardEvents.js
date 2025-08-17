const input = document.querySelector("input");

/*input.addEventListener("keypress",()=>{
    console.log("key pressed");
});*/

// keypress , whenever a key is pressed
// keyup whenever we leave a key 
// keydown whenever you hit a key

// USEFUL PROPERTIES AND METHODS

input.addEventListener("keypress",(e)=>{
    // console.log(e.charCode);
    // console.log(e.code);
    // console.log(e.ctrlKey);   //gives true for all the keys pressed while holding ctrl
    // console.log(e.key); 
    console.log(e.shiftKey); 
})