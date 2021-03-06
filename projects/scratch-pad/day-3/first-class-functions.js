// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value){
        
        if (value > base) {
            return true;
        
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value){
        
        if (value < base) {
            return true;
        
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
         //Verifying what the value is for 'startsWith' & 'value'
        console.log(startsWith);                                                    
        console.log("This is value " + value);
        
        //Placing the first letter of the string in a variable and making it lowercase for easier comparison and verifying 'strV' in the console.
        var strV = value[0].toLowerCase();
        console.log("This is the first letter of value lowercase " + strV);
        //Running a comparison that the lowercase value of startsWith equals the lowercase value of 'strV'
        return Boolean( startsWith.toLowerCase()  === strV);
       
       //Another step way I could verified the result of my Boolean was correct in regards to the test cases.
       // var result = Boolean( startsWith.toLowerCase()  === strV);
       // console.log ("This is the result " + result);
       // return result;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
         //Verifying what the value is for 'startsWith' & 'value'
        console.log(endsWith);                                                    
        console.log("This is value " + value);
        
        //Return the answer of whether the lower case value of the character for 'endWith' is equal to the last letter of the parameter for 'value'
        return Boolean( endsWith.toLowerCase()  === value[value.length-1].toLowerCase());
    }
   // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // var hold = []; //create an array to hold the array
    
    // for( var i = 0; i < strings.length; i++){ //iterate through the strings
        
    //     console.log(modify(strings[i]) +" Modified"); //verifying my test data is processing correctly
        
    //     hold.push(modify(strings[i])); //Pushing the value of the modify function into my hold array for storage.
    // } return hold; //Returning my hold array after looping through and pushing the values.
 //Decided on a more effecient approach similar concept just didn't create a hold variable for the parameter taken in.
    for( var i = 0; i < strings.length; i++){
    strings[i] = modify(strings[i]);
    }return strings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    
    var counter = 0;
    for( var i = 0; i <= strings.length-1; i++){
       
        if (test(strings[i]) === false){
            counter++
        } 
    }   if (counter === 0){
            console.log("Pass Counter")
            return true;
        
        }else {
            return false;
        }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}