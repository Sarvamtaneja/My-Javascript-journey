// Enhanced object literals, introduced in ES6, are a set of enhancements to the syntax for defining objects in javascript . these enhancements make it more convinient and concise to define object properties and methods.

function user1 (name , age , work) {
    return {
        name,  //still works due to enhanced objectv literals.
        age: age,
        work: work,
    };
}

const Sarvam = user1("Sarvam",19,"programmer");
console.log(Sarvam);

// using enhanced object literals

function user2 (name,age,work) {
    return {
        name,
        age,
        work,
        intro /*: function*/ () {     //removed : function still it works perfect due to eol.
            console.log(`Hi my name is ${name} & I am ${age} years old & I am a ${work}.`);
        }
    };
}

const Alex = user2("Alex",18,"Designer");
console.log(Alex.intro());

// Challenge
function getPersonES6 (name,age,height){
    return{
        name,
        age,
        height
    }
}; 

const result = getPersonES6("John",23,183);
console.log(result);