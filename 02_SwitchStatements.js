// switch (expression){
   //case x:     // if true
     // print
     // break;
   //case y:     // if true
     // print
     // break;   
//}

let x = 0 ;
let bulb ;

switch (x) {
  case 0 :
    bulb = "off"
    console.log(bulb);
  break;
  case 1:
    bulb = "on"
    console.log(bulb);
  break; 
  default:
    bulb = "no value found"
    console.log(bulb);
}

let day = "Friday"

switch (day) {
  case  "Monday" :
    console.log("Today is Monday");
  break;
  case "Tuesday":
    console.log("Today is Tuesday");
  break;
  case "Wednesday":
    console.log("Today is Wednesday");
  break;
  case "Thursday":
    console.log("Today is Thursday");
  break;
  case "Friday":
    console.log("Today is Friday");
  break;
  case "Saturday":
    console.log("Today is Saturday");
  break;
  case "Sunday":
    console.log("Today is Sunday"); 
  break;
  default:
    console.log("Don't know what day is today");
}


// challenge

let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Banana is good!");
  break;
  case "Orange":
    console.log("I am not a fan of Orange :(");
  break;
  case "Apple":
    console.log("HOw do you like them apples XD");
  break;
  default:
    console.log("I haven't heard of that fruit");
}