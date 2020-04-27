
//DOES NOT WORK YET

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
function caesarCipher(message, number) {
    alphaIndex = message.split("");           
    let newIndex = [];                                                  //create an array to put numbers in
    for (let i = 0; i < alphaIndex.length; i++) {    //THIS DOES NOT ITERATE. ALL I GET IS THE LAST LETTER'S NUMBERRRRRRRR!!!!
        newIndex = alphaIndex[i].toLowerCase().charCodeAt() - number;            //for every letter in message convert to number  
        console.log(newIndex)
        if (newIndex >= 97 || newIndex <= 123) {
            newIndex = ((newIndex + number) - 97) % 26 + 97;
            newIndex = String.fromCharCode(newIndex);
            console.log(newIndex);
        }
        else {
            console.log();
        }
      } 
    }                                                                    //for every letter present in the message:
                                                                        // if the letter is n or before, add the given number to it to get the cipher number                                                                      //if letter is o or later, subtract (given number-1)



caesarCipher('Bananas', 13);


// cipher('Genius without education is like silver in the mine', 13);
// ```

// ```
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'









