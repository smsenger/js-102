// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printBox(width, height) {
    i = 0;
    star = "*";
    while (i < width) {
        star += "*";
        i ++;
    }
    i = 1
    while (i < height) {
        console.log(star);
        i ++;
    } 
}


printBox(4, 6);



// function printSquare(num) {
//     count = 1;
//     while (count <= num) {
//         count ++
//         console.log("*****")
//     }
// }

// printSquare(5);

