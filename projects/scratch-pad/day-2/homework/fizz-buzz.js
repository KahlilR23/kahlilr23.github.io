// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for (var i=1; i < 101; i++){
    if (i % 15 == 0){
        console.log("FizzBuzz");//multiples of both three and five print “FizzBuzz
    } else if (i % 3 == 0) {
        console.log("Fizz"); //multiples of three print “Fizz”
    }else if (i % 5 == 0){
        console.log("Buzz"); //multiples of five print “Buzz”.
    }else console.log(i); //Prints numbers that's not a multiple
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}