//Once you complete a problem, open up Chrome and check the answer in the console.


// Problem 1
// Create a function called isTyler that accepts name as it's only argument.
//I f the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var name = 'Tyler';

//Code Here
var isTyler = function(param1) {
  if (param1 === "Tyler") {
    return true;
  } else {
      return false;
    }
};

var result = isTyler(name);
alert(result);


// Problem 2
// Create a function called getName that uses prompt() to prompt the user for their name, 
// then returns the name.

//Code Here
var getName = function() {
  var yourName = prompt("What is your name?");
  return yourName;
};

var myName = getName();
alert("My name is " + myName);


// Problem 3
// Create a function called welcome that uses your getName function
// you created in the previous problem to get the users name,
// then alerts "Welcome, " plus whatever the users name is.

//Code Here
var welcome = function() {
  alert("Welcome, " + getName());
};

var result = welcome();


// Problem 4
// Write a function called adder that uses the 'arguments' keyword that 
// comes with every function to
// loop over all the arguments the function received, add them all together, 
// then return the result.
// Save the result of the return value from your adder function, then 
// alert "The Total Number was " + the number that was
// returned from adder.

//Code Here
var adder = function() {
  var result = 0;

  for (i = 0; i < arguments.length; i++) {
    result = result + arguments[i];
  }
  return result;

};
var number = adder(1, 2, 3, 4, 5, 6);
alert("The Total Number was " + number);


// Problem 5
//What is the difference between arguments and parameters?

//Answer Here
Arguments are used when invoking a function.
Parameters are used by the function and variables.


//Problem 6
//What are all the falsy values in JavaScript and how do you check if something is falsy?

//Answer Here
1. undefined
2. null
3. ""
4. NaN
5. false
6. 0
Example where name's value is one of the falsy values: 
if (variableName) {

}


// Problem 7
//Create a function called myName that returns your name

//Code Here

//Now save the function definition of myName into a new variable called newMyName

//Code Here

//Now alert the result of invoking newMyName



// Problem 8
//Create a function called outerFn which returns an anonymous function which returns your name.

//Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

//Code Here

//Now invoke innerFn.