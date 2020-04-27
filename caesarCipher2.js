
//DOES NOT WORK YET.

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
function caesarCipher(message, key) {
    //create
    let newIndex = "";
    let i = 0;
    while (i <= message.length) {
        newIndex = message.toLowerCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));

     } console.log(newIndex);
    //for every letter present in the message add the given number to it to get the cipher letter 
}


caesarCipher('Bananas');





