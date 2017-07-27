// Answer the following questions in this file using comments without running the code
alert("it works!");
// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim, a string


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: itself, it is assigned, not equal to (true)
//CORRECTION: Tim

// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: a string: "Hello, how are you?" AND givenName. the concatenation of them both
//CORRECTION "Hello, how are you? Tim"


// 5.
// What is `math` set to?
let high = 50;
let low = 10;
let math = high - low;
// A: 50-10 (40)

// hello

// 6.
// What is `math` set to?
math = high - "5";
// A: if high still is assigned to 50, then 45


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A: 
let age = today - born;
"Tim is" + age + "years old"


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Hamilton"
let instructorName = "Zach";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A: it is correct


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 07;
let myString = "This is my string"
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = myUndefined;
// A:
//CORRECTION 
let myUnderfined;


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true, because 0 is false


// 12.
let y = (false == "");
// A. nothing in the string, so returns true because false is equal to false


// 13.
let z = (0 == "");
// A. true


// 14.
let a = (null == null);
// A. true


// 25.
let b = (undefined == undefined);
// A.  true 


// 16.
let c = (undefined == null);
// A. error - false
//CORRECTION: this will return undefined


// 17.
let d = (null == false);
// A. false


// 18.
let e = (NaN == null);
// A.  false


// 19.
let f = (NaN == NaN);
// A. false 


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty) {
	console.log("I'm parched!");
} else {
	console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.


if (x) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: I had believed this would run true, because x is a placeholder
//CORRECTION: After running this in the console, I see it returns x is not defined. therefore undefined


// 22.
if ("") {
	console.log("True!");
} else {
	console.log("False!");
}
// A: false, undefined


// 23.
// this expression will set x to NaN
// let x = 1 * undefined; 

if (x) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: false, not a number.. 


// 24.
if (false) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: I said it returned true
//CORRECTION: It returns false and undefined in the console.


// 25.
if (-5 && 5) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: false, parameters undefined. if added it equals zero which is false. 
//CORRECTION: returns True and undefined in the console. -5 and 5 are values that are not mathmatically added


// 26.
if ("Hello World!") {
	console.log("True!");
} else {
	console.log("False!");
}
// A: true, value exists


// 27.
if ({}) {
	console.log("True!");
} else {
	console.log("False!");
}
// A:  object inside of an if statement, an empty object, therefore false
//CORRECTION: Returns true in the console. 

// 28.
if ({ name: "Yehuda Katz" }) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: true, value assigned to name


// 29.
if (new Date()) {
	console.log("True!");
} else {
	console.log("False!");
}
// A: true satisifes the if statemetn

// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
