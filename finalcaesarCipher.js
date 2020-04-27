


function caesarCipher (str, number) {
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + number ) % 26 + 65));
}


console.log(caesarCipher("That's Bananas!", 4));
