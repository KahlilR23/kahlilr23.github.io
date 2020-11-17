/** STRING MANIPULATION
 * 
 * 0. String Manipulation is also known as string handling, and is the process of changing, parsing or analyzing strings. 
 * Strings are not stored as character arrays so built in functions are used to manipulate their value. You might be asking why strings are 
 * simple data types when we can manipulate them. This is because when you use some of the following built in functions to manipulate strings. These methods
 * are actually returning new strings. 
 * 
 */
 
 //1. String Manipulation with Operators //
    //One of the most common uses of string manipulation with operators is concatenation. 
 var string = 'Superman is the ';
 console.log(string += 'strongest super hero!');  //Example of using operators to take two strings and combine them together to form one NEW string. 
                                                 //Prints "Superman is the strongest super hero!"
    
    //We also could concatenate by using a + sign
 console.log("Superman is the " + "strongest super hero!"); //Prints "Superman is the strongest super hero!"


//2. String Manipulation with String methods //
    //There are several types of methods to manipulate strings. each gives a new manipulated string. 
    //A few of the string manipulation methods are:
var string1 = 'Iron Man is ';
var string2 = 'the best!';
console.log(string1.concat(string2));   //Concat takes 2 strings and combines them into 1 NEW string. 
console.log(string1.charAt(2));         //CharAt() returns a character at a specific location or index which is 2. 
    //Strings have index values similar to arrays, index "2" for "Iron Man is " is "o". Spaces have an index value as well. Index values start at 0.
    
console.log(string1.toUpperCase());     //.toUpperCase takes the target string and returns a new sting with all capital letters. 
    //this will print OP SPARK IS
console.log(string1.toLowerCase());     //.toLowerCase takes the string and returns a new string that is all lower case. 
    //prints op spark is
console.log(string1.length);            //Print the number of values in the string. 
var splitString = string1.split(' ');   //This takes the string "Iron Man is " and creates a new array by splitting up the string where there are spaces. 
console.log(splitString[1]);           //Now that this new string is an array. we can print the 2nd index of the array. in this case 'is'
                                            //string where there are spaces. (without quotes) is printed to the console.
    
console.log(string1.slice(2, 5));      //.slice takes parts of a sting and returns a new string. in this example we are starting 
                                      //at index 2 and ending at index 5 which prints to the console "on".