// Write a function factors which is given a number and returns an array containing all its factors.

function printFactors(number) {
    factors = [];
    for(i=1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        } 
    } console.log(factors);
}

printFactors(20);