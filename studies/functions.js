/*
 * FUNCTIONS:
 *
 * 0. A function allows us to encapusale a block of code, and execute that block of code
 * whenever we want and however many times we want. This keeps us from having to write 
 * new code for our application every time we want to perform an an action.
 *
 * 1. To create a function we use the keyword, yes you guessed it, function
 *
 * 2. There are 2 phases of using functions: declaration and call (or invocation).
 */

// 1. Declaration //
function functionName(){
    //function body - your code goes here!
}
/*
* At the declaration phase, the function "functionName" can take in placeholders called
* parameters that we will discuss later
*/
 
//Example of a full function:
function add(num1, num2){
     return num1 + num2; //Returns the answer to "num1" plus "num2"
}
/*
* In this example, the function "add" takes in two parameters, "num1" and "num2". The 
* parameters are placeholders for any values we want to use in the fuction.
*/
/* NOTE: We can add as many parameters as we like, also the area between the two curly
*braces "{ }" is considered the "function body" and it's where your code goes. Also a 
* function doesn't have to take in parameters.
*/
 
 // 1. Function Call //
 /* After we declare a function we have to "call" on it to actually use it on some values.
 *  Just like parents have to "call" children names to do chores, think of that as function
 * "call". 
 * Remeber parameters are only placeholders for our values. In order to use the values we have
 * to "invoke" our function by creating a function call.
 */
 
 functionName(); //We're calling our earlier function "functionName" that doesn't take in values.
 
 //Example of a function call with values:
 add(23,27); //We're calling our earlier function "add" that takes in arguments "23" and "27".
 
 /* NOTE: This line of code takes in 23 and 27 as the input to our "add" function. These
*"arguments" take place of the "parameters" "num1" and "num2" that we created in the 
* function declaration stage.
*/


// 2. Scope //
/* Scope refers to where variables or constants are accessible.
*  There are two types of scope Global scope and Local scope.
*/
//Ex. 1 Gobal Scope

var superHero = "Batman"; // Global variable

function heroes (){
    superHero = "Superman"; //The variable superHero made in the global scope is visble in the scope of function "heroes"
}

console.log(superHero);     //Prints "Batman"
heroes();                  //Calls the heroes function
console.log(superHero);   //Prints "Superman". Note: Since the function has been called notice the string has been changed
                         //has been changed to "Superman".

//Ex. 2 Local Scope
//local scope refers to declarations that happen with the body "{}" of a function.

function villian(){
    var v = "The Jokers";
    console.log(v);
}
//console.log(v);  //Notice if you try to access the variable "v" it throws a reference error because variables created in the local
                        //scope can't be accessed outside the function.
                        
