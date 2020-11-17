//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function objectValues(object) {
// input is an object
//output is an array of the objects values
//lets first create the array to hold the values;
const arrayToBeReturned = [];
 
//lets loop through the object grabbing all the values.
for(var key in object){
    //inside of loop put object value into array
    
    arrayToBeReturned.push(object[key]);
}
 
 //once the loop finishes we will return the array 
 
 return arrayToBeReturned;
 
} 
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
    return Object.keys(object).join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
    console.log(Object.values(object).join(" "));
   return Object.values(object).join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (collection === '{}' || collection === 'object' || collection === {} || collection === 'Object' || collection === Object){
        console.log(collection); console.log('object');
    } else if (Array.isArray(collection)) {
        console.log(collection); console.log('array');
    } else {
        console.log(collection); console.log(' that array');
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
function capitalizeAllWords(string) { //Ask Ryan about this one as well. 
     return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!'
    console.log("Welcome " + Object.values(object).join(" ").charAt(0).toUpperCase().slice(1)  + '!');
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
    console.log(object.name + " is a " + object.species);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
    if (object.noises === '{}' ||  object.noises === {} || object.noises === [] || object.noises === '[]'){
        return 'there are no noises';
    }
        return object.noises.join(" ");
} 
 
 //////////////////////////////////////////////////////////////////////  
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
        //Take the string and split it and create a variable to house the array.
        //.includes only works for arrays
        
       return string.split(" ").includes(word);


}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object"
//Add the name to the object friends array.
//friends is key in object //name push into array //return whole object

        object.friends.push(name);
        return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
    if (Object.values(object).length === 0 || Object.values(object).length === '0'){
        return false;
    } else {
         return object.friends.includes(name);
    }
    


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
//Take in a name 
//return a list of all names name not friends with.
var newArr = [];

console.log("this is array" + array);
console.log("friends array" + array.friends);

        // // if (array.includes(name) === name){
            
        // // }
        // for (var i = 0; i < array.length; i++){
        //     if ( array[i].friends.includes(name) === name);
        //     {
        //       newArr = array[i].pop();
        //     console.log("This array1 " + newArr);
        //     }
        // } console("This after pops" + newArr);
//Ryan example

        let notMyFriends =[];
        
            for( let i = 0; i < array.length; i++){
                
                if(array[i]['name'] === name || array[i]["friends"].includes(name)){
                    continue;
                } else {
                    notMyFriends.push(array[i]['name']);
                }
            }
    
    
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

//"updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it."
    var test = value;
    console.log(` ${object}.${key}[${test}]`);
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
//Think of it is a json data we can chain more into arrays like object.key[array].array[9]
 var arrkeys = [];
 var str =  Object.keys(object).join().split(',');
 console.log("1st For " + str);
 arrkeys.push(str);
//  for (var i = 0; i < array.length; i++){
    
//     if (str.includes(array[i])) {
//         console.log("object before " + object[str]);
//         console.log("They Equal! " + array[i]);
//       //  for (var property in object) {
//         for ( str in object) {
//           // console.log(`Before!!!${property}: ${object[property]}`);
                
                
//                 delete object[i];
                
//             //    console.log(`After!!!${property}: ${object[property]}`);
//         }
//     } else {
//         console.log("They Dont Equal! " + array[i]); 
//     }console.log("array after " + arrkeys);
//     console.log("object after " + object[str]);
//  }
 //if ()
//   var arrkeys = [];
// for (var key in object){
// //   if(array.includes(object.key)){
//       //console.log('please work ' + array.includes(object.key));
//         console.log("1st For " + Object.keys(object));
       
//       for (var i = 0; i < array.length; i++){
//             arrkeys.push(key);
//           console.log("for array loop obj " + arrkeys);
//       }
//       //console.log(`var loop  ${object.key}`);
//       //console.log("this is the key " + key);
//   }
//   console.log("outide loop obj " + object.arrkeys);

//Ryan help

for(let key in object){
    
    if(array.includes(key)) {
        delete object[key];
    }
}




}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}