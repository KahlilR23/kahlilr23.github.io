/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using function: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;           //"1" is a number
var myVariable = true;       //"true" is a boolean
myVariable = "someString";  //"someString" is a String.


/* There are multiple way way we declare variables in Javascript.
* We can declare variables using "var", "let", and "const".
*/

/*// 1. var //
*When using the keyword "var" we are making the variable global meaning  that we can update 
*and redeclare within its scope. We are able to update and redeclare throughout most of our code.
*/
//Ex.1

var superHero = 'Iron Man';

/* // 2. let// 
*The let keyword makes a varialbe block scoped "{}" and can only be updated but not redeclared. 
*/
//Ex. 2
let name = "Tony Stark";


/* // 3. const //  
*Const means the variable keeps a constant value. Const variables are also block scoped but 
*can not be updated or redeclared.
*/
//Ex. 3
const joke = "I'm Batman!";


/* // 1. Hoisting. //  
*Hoisting usually suggests that declaring varialbes are moved to the top of your code 
*before the code is executed.
*/
//Ex. 1
console.log(typeof villian); // The typeof command outputs the data type. 
//In this example the variable (villian) was never declared so it initially stores a value of undefined becasue of hoisting.