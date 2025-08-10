// syntax is same as spread operator ...

function user(...userdata){
    console.log(userdata);
}

user("Sarvam"); //this will print
user("Sarvam",19,"student");  // this would print only Sarvam.
// Inorder to fix this enter ... in front of userdata in function decclaration.

// NOTE: if rest parameter is added , it should be the last parameter in the function.

function person(firstName,secondName,...hobbies){
    console.log("First name: ",firstName);
    console.log("last name: ",secondName);
    console.log("hobbies ",hobbies);
}

person("Sarvam","Taneja","Coding","Singing");
