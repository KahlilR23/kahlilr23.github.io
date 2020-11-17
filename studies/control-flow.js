/*
 *  CONTROL FLOW:
 *
 * 0. Controlling the flow of our application refers to how we make decisions in our code by true or false
 * questions. Depending on the answer to those questions, we can decide what code to run when
 * something is true or a diffent set of instructions when something is false.
 * To accomplish this we can use a few conditional statements called, "If", "Else-If", "Else", and "Switch"
 *
 */
 
 
 // 1. If //
 /* If statements essentially tells a program what to do "if" a staement is true.
 * Let's take a look at a code example of using "if".
 */
 
 var time = 11;              //We set a vairable named "time" and made it equal 11.
 // We set our if statement to ask is "time" (which equals 11) less than ("<") 12 which return true
 if (time < 12){            //Since the answer to the if statement is true it runs the code between the curly braces "{ }"
                    
     console.log("It's morning time!"); //Console.log() tells the computer to print out the statement inside of the parenthesis
 }                                        //<--End of if statement code block.
 
 
 // 2. Else-If //
 /* Else If statements essentially asks another true or false question if the first if statemnt is false
 * Let's take a look at a code example of using "else-if".
 */
 var time = 13;                   //We set a vairable named "time" and made it equal 13.
 // We set our if statement to ask is "time" (which equals 13) less than ("<") 12 which return false
 if (time < 12){                  //Since the answer to the if statement is false it does not run the code 
                                             // the curly braces "{ }" and moves to the "else if"
     console.log("It's morning time!"); 
 // We set our else if statement to ask is "time" (which equals 13 more than (">") 12)which return true
 } else if (time > 12) {                    //Since the answer to the else if statement is true it runs the code between the curly braces "{ }"
      console.log("It's after 12:00!");     //Console.log() tells the computer to print out the statement inside of the parenthesis
 }                                         //<--End of else if statement code block.
 
 
 // 3. Else//
 /* Else statements essentially runs the code when all if statements are false 
 * Let's take a look at a code example of using "else".
 */
 var time = 20;                       //We set a vairable named "time" and made it equal 20.
 // We set our if statement to ask is "time" (which equals 20) less than ("<") 12 which return false
 if (time < 12){                    //Since the answer to the if statement is false it does not run the code 
                                        //between the curly braces "{ }"and  moves to the "else if"
     console.log("It's morning time!"); 
 // We set our else if statement to ask is "time" (which equals 13 strictly equal to  ("===") 13 which return false
 } else if (time === 13) {         //Since the answer to the if statement is false it does not run the code between the curly braces "{ }"
                                           //the code between the curly braces "{ }"and  moves to the "else" statement
      console.log("It's after 12:00!");     
//When all above cases are false it runs the code between the curly braces "{}" for "else" 
 } else {
   console.log("It's night time!");         //Console.log() tells the computer to print out the statement inside of the parenthesis
 };                                        //<--End of else statement code block.
 /*NOTE: If statements will only run the first if it finds that is true. So if you have multiple true 
 *if or else if statements only the first true one will execute.
 */
 
 
 // 4. Switch //
 //A switch statement takes in a condition and matches the condition to the case clause and 
      //executes the statements associated with the case.
 //Here's A code example!
 
 //We set a vairable named "color" and made it equal red.
 var color = 'red';
 //"switch" begins the statement declaration and we're taking in the variable "color"
 switch (color) {
                                     //It will step through each case untils it finds the one that matches the value of color.
    case 'orange':
     console.log('My favorite color is not orange');
     break;                                           //"break" statements end each case and mut be put after each each or it will
    case 'pink':                                           //execute the next block. 
     console.log('My favorite color is not pink');
     break;
    case 'red':
     console.log('Red is my favorite color!!!');   //Since the value of "color" is red it will print out the sentence "Red is my favorite color!!!"
     break;
    case 'purple':
     console.log('My favorite color is not purple');
     break;
    default:
     console.log('Can not find my favorite color.');
 }