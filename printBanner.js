// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(message) {
    //enter message as argument
    let banner = "";
    for (i = 1; i <= message.length; i++) {    //for each index in array/for length of array, print a * before and after
        banner += "*";
    }
    console.log(banner);
    console.log(message);       //then print the message
    console.log(banner);        //then print the banner again

}

printBanner("That's bananas!");

