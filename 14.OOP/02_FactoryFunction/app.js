// A type of function that is used to create and return object. it's a design pattern that provides an alternative way to create objects compared to using constructors and new keyword. 

function CreatePerson(firstName,lastName,pl) {
    return {
        firstName: firstName,
        lastName: lastName,
        pl: pl,
        fullName : function(){
            console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`);
        }
    };  
};

let John = CreatePerson("John","Doe","Python");
let Peter = CreatePerson("Peter","Parker","C++")
John.fullName();
Peter.fullName();

//--------------------------------------------------

// CHALLENGE

function createVehicle(type,brand ,model,year) {
    return {type,brand,model,year}
};

const vehicle1 = createVehicle("Car","Toyota","Fortuner",2022);
const vehicle2 = createVehicle("Car","Honda","Civic",2021);
console.log(vehicle1);
console.log(vehicle2);