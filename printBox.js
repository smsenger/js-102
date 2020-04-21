
// // Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(x, y) {
    let end = "";

    for(let i = 1; i <= y; i++) {
        end += "*";
    }
    console.log(end);

    for(let i = 0; i < x - 2; i++) {
        let middle = "*";
                   
        for(let j = 0; j < y - 2; j++) {
            middle += " ";
        } 
        middle += "*";
        console.log(middle);  
    }
    console.log(end);     
}

printBox(4, 6);

// ******
// *    *
// *    *
// ******


// CHEATER CODE:
// function printBox() {
//     let box = ["******", "*    *", "*    *", "******"];
//     for (let i = 0; i < box.length; i++) {
//         console.log(box[i]);
//     }
// }

// printBox();