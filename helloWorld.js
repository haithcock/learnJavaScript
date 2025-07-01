//there are three ways to create and declare variables in JavaScript



// 1. Using var
//2. Using let
//3. Using const

var city = "서울";

let country = "Korea";

const animal = "dog";

//nest its important to know how to make basic print statements in JavaScript.
//In python you would use print() to print to the console.
//In JavaScript, you use console.log() to print to the console. for example:
console.log(animal); //This prints "dog" to the console.
console.log(city); //This prints "서울" to the console.
console.log(country); //This prints "Korea" to the console.
//If you wanted to make a regular degular print statement you would use console.log() like this:
console.log("Hello World!");

//const cannot be changed later.

//let might be changed later.

//var can be changed later and is tricky. For now avoid using var.


/*
You can also declare variables without assigning them a value.
This is called declaring a variable without initialization.
In this case, the variable will have the value of undefined until you assign it a value later
*/



//A basic example of declaring a variable and changing its value is as follows:
let numOfDogs = "5";
console.log(numOfDogs); //This prints "5" to the console.
numOfDogs = "3"; //This changes the value of numOfDogs to "3".
console.log(numOfDogs); //now this prints "3" to the console.


