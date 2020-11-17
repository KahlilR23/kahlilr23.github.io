/**
* DATA TYPES:
*
* 0. Data types basically tell what kind of data can be stored and manipulated within a program. There are 
* two main categories of data types: 1. Primitive 2.Complex
*
* 1. Simple data types include Number, String, Boolean, undefined, null, NaN (not a number), and positive/negative infinity.
* 
* 2. Complex data types include Arrays, Objects, Functions
* 
*/
// 1. Number //
    //Javascripts sees numbers as Simple data types. 
   // A number is exactly how it sounds. We use them in everyday life, math class, and in coding.
   
var k = 23; // here we are setting the variable equal to the simple data type of a number. You do not need any quotations around the number like you would need for a string. 
console.log(k); // will print to the console 23.

// 2. String //
    //Javascript sees string values as Simple data types.
    //Strings are used in JavaScript all the time. The paragraphs and words on your webpage are considered strings. 
    //Strings are housed in quotations and lets JavaScript know you are displaying the text housed in these quotations. 
var j = "Iron Man is the best super hero."; //Assigns the string value "Iron Man is the best super hero." to j.
console.log(j); //this will print to the console. This is a string. notice how the quotations are not actually displayed on the console. 
    

// 3. Boolean //
    //Javascript sees Boolean values as Simple data types. 
    //Boolean values basically hold the value true or false. Booleans are great to use when you have yes or no/ true or false questions that need to be answered. 
var boy = true; //setting the boolean value true to the variable boy. notice how we do not need quotes or to upper case the first letter. 
console.log(boy);


// 4. Array //
    //Arrays are considered Complex data types. 
    //Arrays are denoted by [] and house all types of simple data types in them.
var myArray = [1, true, {name: 'Tony Stark'}, 'Iron Man is the best super hero.']; //Notice that you can have all types of simple and complex data types in an array
console.log(myArray);  //Will print [ 1, true, { name: 'Tony Stark' }, 'Iron Man is the best super hero.' ] to the console. 
    //JavaScript keeps track of the order/placement of data in an array by INDEXES. so index 0 would be 1 in our myArray array. 
console.log(myArray[1]); //This finds the value at index 1 of myArray and prints true to the console. 


// 5. Object //
    //Objects are considered Complex data types. 
    //Objects are displayed in {} and house what are called key - value pairs or PROPERTIES. 
var myObject = {name: 'Tony Stark', hobbies: ["coding", "gaming"], fears: 'snakes'}; //We are placing stings and an array of strings inside the object myObject. 
console.log(myObject); //This will print the entire object to the console. {name: 'Tony Stark', hobbies: ["drumming", "gaming"], fears: 'snakes'}.

// 6. Function // 
    //Functions are considered Complex data types. 
    //functions are esentially procedures or a set of statements that performs a task or calculates a value. 
function superHero(name) {   //Here we are taking a function superHero and passing in name as the parameter. 
    console.log(name + ' is the best!'); //The superHero function's task is to print to the console. the name passed throug and " is present"
}
superHero('Tony Stark'); //This is where we call the function and pass in the name, so the console will print "Tony Stark" is present.

// 7. undefined //
    //Undefined is considered a simple data type. 
    //undefined indicates a variable has not been defined. 
var k; //Since we did not set k equal to a value, undefined will print to the console. 
console.log(k);
var h = undefined;  //Sets undefined to variable h.
console.log(h);     //Prints to the console undefined. 


//8. null //
    //null is considered a Simple data type. null can also be an object value. 
    //null is the absence of any value, it is also considered falsy (false) for boolean operations
var z = null;    
console.log(z);     //Prints null to the console. 


// 9. NaN //
    //Considered a simple data type. 
   //Stands for Not a number. 
var w = NaN;
console.log(w); //Prints NaN to the console. 


// 10. infinity and - infinity //
    //Positive infinity is used to represent a value greater than any other number.
    //Negative infinity is used to represent a value less than any other number. 
    //Infinity is displayed when a number exceeds the upper limit of the floating point numbers
var r = typeof (Infinity);// the type of command will return what data type infinity is
console.log(r); //prints number to the console.


//11. Primitive vs complex data //
    //Primitive data types are immutable meaning the value can not be changed
    //Primitive data types are Number, String, Boolean, undefined, null, NaN (not a number), and positive/negative infinity.
    //Complex data types are Arrays, Objects, Functions.
    //Complex data types are mutable meaing the value can be changed. 
var complex = [1, true, 45];
complex.push('Adding a string');  //Adds "Addina a string" to the array.
console.log(complex);            //Prints to the console "[ 1, true, 45, 'Adding a string' ]"

var ball = 'Jordan is better than LeBron.';
ball = 'LeBron is better.';    //Reassigns a string value to the var simple but we have no way to change the actual value of the string. 
console.log(ball);            //Prints to the console "LeBron is better."


//12. Copy by value vs copy by reference //
    //Simple data types are copied by value. 
var number = 2;
var num = number;
console.log(num); //In this code we see that the value "2" is copied to a new variable test2 so test2 = test
    //Complex data types are copied by reference. meaning Whenever a variable that points to a complex data type is referenced by another variable, a copy of the reference that the variable is pointing to is created.
var complexTest = {name: 'Tony Stark'};
var complexTest2 = complexTest;
console.log(complexTest2); //this code has created a reference of the object that complexTest first pointed to.

