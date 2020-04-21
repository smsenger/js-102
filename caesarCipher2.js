// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
function caesarCipher(message) {
    //create
    let newIndex = [];
    let i = 0;
    while (i <= message.length) {
        newIndex = message.toLowerCase().charCodeAt(0) - 97 + 1;
        i++;
     } console.log(newIndex);
    //for every letter present in the message add the given number to it to get the cipher letter 
}


caesarCipher('Bananas');