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
//var objectOne = {a: "one", b: "two", ponies: "crayons", something: {} , dingle: "dangle"};
//var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
//assert.equal(valuesToString(objectOne), "one two crayons dangle");


 function valuesToString(object) {

var str = "";
if (Array.isArray(object)){
    for ( var i = 0; i < object.length; i++){
        if ( typeof object[i] === "string")
         str += object[i]+ " "; 
    }
} else if (typeof(object) === "object"){
    
    for (var key in object){
        if(typeof object[key] === "string"){
            str += object[key] + " ";
        }
    }
        
    } str = str.trim();
      return str;


}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
// assert.equal(arrayOrObject({a:"one"}), "object");
// assert.equal(arrayOrObject([1,2,{}]), "array");

    if (Array.isArray(collection)) {
        return 'array';
    }else if (collection === '{}' || typeof collection === 'object'){
        return 'object';
    
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
// assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
// assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
  
    return "Welcome " + object.name.toUpperCase().charAt(0) + object.name.slice(1) +'!';
   
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
// assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
// assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");    
    
return object.name.toUpperCase().charAt(0) + object.name.slice(1) + " is a " + object.species.toUpperCase().charAt(0) + object.species.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
// assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
// assert.equal(maybeNoises({noises: []}), "there are no noises");
// assert.equal(maybeNoises({}), "there are no noises");

       if(Array.isArray(object.noises) && object.noises.length > 0){
      return object.noises.join(" ");
  }else {
      return "there are no noises";
  }

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


        let notMyFriends =[];
        
            for( let i = 0; i < array.length; i++){
                
                if(array[i]['name'] === name || array[i]["friends"].includes(name)){
                    continue;
                } else {
                    notMyFriends.push(array[i]['name']);
                }
            } return notMyFriends;
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

//"updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it."
// var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});    

object[key] = value;

return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
//Think of it is a json data we can chain more into arrays like object.key[array].array[9]

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
let newArray = [];
array.forEach((c) => {
    if (!newArray.includes(c)) {
        newArray.push(c);
    }
});
console.log(newArray);
return newArray;

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