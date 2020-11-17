/*
* LOOPS:
*
* 0. Guess what loops are exactly what the name implies! They are built in code syntax
* that allows us to run/execute a code block as many times as possible.
* The types of loops I'm going to discuss are "while", "for", and "for-in" loops.
*
*/

// 1. While Loops //
// While loops are exactly what the name implies, they keep looping "while" while a conditional statement is true.
//Let's take a look at a code example of using "while".

var count = 1;              //We set a vairable named "count" and made it equal 1.

while( count < 10) {        //We used the while loop to constantly check if count is less than 10. It will keep running 
                                //until the count is equal to 10 or more than 10.
    count = count + 1;      //We count equal to count + 1. Which means every time it goes through the loop it will
                                //add 1 to the current count. So 1+1 =2, 2+1=3, and keeps going until count + 1 = 10.
    console.log(count);    //Prints out the current value of count.
}

/*OUTPUT///

2
3
4
5
6
7
8
9
10

//OUTPUT*///

// 2. For Loops //
//For loops are best used when we know the exact amount of times we want to loop a block of code.

//"for" begins the loop declaration
for (var i = 0; i <= 10; i++) {      //"var i =0;" is the start condition and tells us the number the loop will start 
    console.log(i);                 //"i <= 10;" is the stop condition and tells us how many times the loop will run until it stops
}                                  //"i++" adds 1 to the value of 'i' (which is 0) after each loop.
                                  //"console.log(i);" Prints out the value of 'i' each loop until "i <=10" is false.
/*OUTPUT///

0
1
2
3
4
5
6
7
8
9
10

//OUTPUT*///

//Looping Over An Array\\

var superHeroes = ["Iron Man", "Batman", "Superman", "Spider-Man"]; //An array of super heroes.

//"for" begins the loop declaration
for (var i = 0; i < superHeroes.length; i++){           //"var i =0;" is the start condition and tells us the number the loop will start 
    console.log(i +" "+ superHeroes[i]);               //"i < superHeroes.length;" is the stop condition and tells us how many times the loop will run until it stops
}                                                           //"superHeroes.length" gives us the length of the array which is 4.
/*OUTPUT///                                          //"i++" adds 1 to the value of 'i' (which is 0) after each loop.
                                                    //"console.log(i +" "+ superHeroes[i]);" Prints out the value of 'i' each loop until "i < superHeroes.length;" is false.
0 Iron Man                                              //"i" is the index of the array
1 Batman                                               //"superHeroes[i]" prints out the value at each index.
2 Superman
3 Spider-Man

//OUTPUT*///

//Looping Backwards Over An Array\\

//"for" begins the loop declaration                  //"var b = superHeroes.length-1;" is the start condition and tells us the number the loop will start 
for (var b = superHeroes.length-1; b > -1; b--){        //"superHeroes.length-1;" gives us the length of the array which is 4 minus 1.
    console.log(b +" "+ superHeroes[b]);            //"b > -1;" is the stop condition and tells us how many times the loop will run until it stops
}                                                   //"i--" adds 1 to the value of 'b' (which is 3) after each loop.
/*OUTPUT///                                       //"console.log(b +" "+ superHeroes[b]);" Prints out the value of 'i' each loop until "b > -1;" is false.
                                                        //"b" is the index of the array
3 Spider-Man                                           //"superHeroes[b]" prints out the value at each index.
2 Superman
1 Batman
0 Iron Man

//OUTPUT*///
//NOTE: Make sure to pay special attention to how these loops are set up!

// 3. For-In Loops //
//The "for-in" loops out all the keys of an Object, one by one. This allows you to use the key to get the value.

//We created an Object called "names".    
var names = { 
    IronMan:    'Tony Stark',
    Batman:     'Bruce Wayne', 
    Superman:   'Clark Kent',
    SpiderMan:  'Peter Parker'
} //The keys on the left side, Ex. "IronMan:" and the values are on the right side, Ex. "'Tony Stark',"

for (var key in names){       //All the values for each key are looped 
    console.log(names[key]);  //"console.log(names[key]);" Prints the values of each key one by one until all the values 
}                             // in the object have been printed.

/*OUTPUT///

Tony Stark
Bruce Wayne
Clark Kent
Peter Parker

//OUTPUT*///