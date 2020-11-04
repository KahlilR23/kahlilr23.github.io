// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //Iterate through the array and print to the console
  for ( var i = 0; i <= array.length; i++){
    
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //console.log(array.reverse()); <- Ask about this also.
  
  //Iterate through the array and prints in reverse order.
  for ( var i = array.length-1; i >= 0; i--){
    
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  //Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
  return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
   //console.log(Object.keys(object)); <- Ask why this didn't work
  
  var arr = Object.keys(object);          //<- Put object keys in an array
  for (var i = 0; i < arr.length; i++){  //<- iterate through the array items
  console.log(arr[i]);                  //<- prints the array items at index
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
    return Object.values(object); // Object.values returns the values of an object.
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  //console.log(Object.values(object)); <- Normally this would work ask a question about this 
 
  
  var arr = Object.values(object);        //<- Put object values in an array
  for (var i = 0; i < arr.length; i++){  //<- iterate through the array items
  console.log(arr[i]);                  //<- prints the array items at index
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //Object.keys() method returns an array of a given object's, then used .length to get the of the set of values.
  return Object.keys(object).length;
  
  // YOUR CODE ABOVE HERE //*/
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //console.log(Object.values(object).reverse()); <-- Ask about this also. I believe since it just prints the array instead of broken up the test fails.
   
  var arr = Object.values(object).reverse();       //<- Put object values in an array
  for (var i = 0; i < arr.length; i++){  //<- iterate through the array items
  console.log(arr[i]);                  //<- prints the array items at index
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
