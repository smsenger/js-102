// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
function caesarCipher(message) {
    //create an array to put numbers in
    let newIndex = [];
    for (let i = 0; i <= message.length; i++) {    //THIS DOES NOT ITERATE. ALL I GET IS THE FIRST LETTER'S NUMBERRRRRRRR!!!!
        newIndex = message.toLowerCase().charCodeAt(i++) - 96;   //for every letter in message convert to number  
        // i++;
     } console.log(newIndex);
                                                                        //for every letter present in the message:
                                                                        // if the letter is n or before, add the given number to it to get the cipher number
                                                                        //if letter is o or later, subtract (given number-1)
}


caesarCipher('Bananas');


// cipher('Genius without education is like silver in the mine', 13);
// ```

// ```
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'










