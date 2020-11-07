// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

return {
    id: id,
    nameFirst: nameFirst,
    nameLast:   nameLast,
}


} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    
    var contacts = [];
    
    //var contactsList = [];
    return {
        // we implemented the length api for you //
        length: function(){
        //Returns the length of my variable contacts
            return contacts.length;
        },
        addContact: function(contact){
        //Takes in contact object and pushes it to my global variable contacts
            contacts.push(contact);
        },
        findContact: function(fullName){
        //Used a for loop to iterate through contacts, then an if statement to check if the parameter fullName matches any values in my contact object and it returns the object if it matches        
            for( var i = 0; i < contacts.length; i++){
                if (fullName === contacts[i]["nameFirst"]+" "+contacts[i]["nameLast"]){
                    return contacts[i];
                }
            }
        },
        removeContact: function(contact){
        //Used a for loop to iterate through contacts, then an if statement to check if the parameter contact matches any values in my contacts object and used spice to remove the value;
            for( var i = 0; i < contacts.length; i++){
                if (contact === contacts[i]){
                    return contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function(){
        //Created an array varaible print3 to hold the values as I loop through and push them into my array. Returned the array with a .join method and \n for new line so each contact prints on a new line.
        var print3 =[];
            
            for( var i = 0; i < contacts.length; i++){
     
                print3.push(contacts[i].nameFirst+" "+contacts[i].nameLast);
                 
            } return print3.join("\n");
         },
    }
}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
