//Task 1
var  firstNumber = 9;
console.log(firstNumber);

//Task 2
let firstString = "chai or code";
console.log(firstString);

//Task 3
const firstBoolean = true;
console.log(firstBoolean);

//Task 4
let number  = 4;
console.log("Number:", number,"Type:", typeof number);
let secondBoolean = true;
console.log("value:", secondBoolean , "Type:", typeof secondBoolean);
let secondString = "JS practice challange";
console.log("Value:", secondString , "Type:", typeof secondString);
let myObject = {name: "SP", accounct: "Youtube"};
console.log("object:", myObject , "Type:", typeof myObject); 
let myArray = ["SP", "Youtube", "x", "instagram"];
console.log("array:", myArray, "Type:", typeof myArray);

//Task 5
let intialValue = 3;
console.log(intialValue);
intialValue = 5;
console.log(intialValue);

//Task 6
const oneValue = "It cann't be reassigned";
console.log(oneValue);

try{
    oneValue = "New Value";
} catch (e) {
    console.log("error message: ",  e.message);
}

