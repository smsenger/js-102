// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:


function printNumbers(num) {
    let count = 0;
    while (count <= num) {
        console.log(count);
        count++;
    }
}    

printNumbers(10);
