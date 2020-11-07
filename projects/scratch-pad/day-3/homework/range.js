// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var arr = [];                               //create an array to hold the array
    
    if (start <= end){                          //check to see is 1st param less than  2nd param
    
        for (var i = start; i <= end; i++) {    //Iterate through the loop of number from start range to end range
            arr.push(i);                        //Push the loop of numbers into an array
        }   return arr;                         //return the full array after the loop is finished
    }else {                                     // else happens when the 2nd param 'end' is larger than start
        for (var i = end; i <= start; i++) {    //Iterate through the loop of number from end range to start range
            arr.push(i);                        //Push the loop of numbers into an array
            console.log("2nd for " + arr[i]);   //Console log to verify my numbers
        }   return arr.reverse();               //Used reverse method to return array in reverse order
    } 
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
