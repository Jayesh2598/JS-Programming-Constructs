//1. Powers of 2 till 2^n

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
for (var i = 1; i <= number; i++) {
    console.log(Math.pow(2, i));
}

//2. Harmonic number

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
let harmonicSum = 0;
for (var i = 1; i <= number; i++) {
    harmonicSum += 1 / i;
}
console.log("Harmonic sum = " + harmonicSum);

//3. Prime check

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
let check = true;
if (number <= 0)
    console.log("Enter a positive integer.");
else if (number == 1)
    console.log("1 is neither prime nor composite.");
else {
    for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            check = false;
            break;
        }
    }
}
if (check == true && number >= 2)
    console.log(`${number} is prime.`);
else if (check == false && number >= 2)
    console.log(`${number} is not prime.`);

//4. Prime numbers in a range

const prompt = require('prompt-sync')();
let lower = prompt("Enter a number : ");
let upper = prompt("Enter a number : ");
let start = Math.min(lower, upper);
let end = Math.max(lower, upper);
if (start <= 1 && end <= 1)
    console.log("No prime numbers in this range.");
else {
    console.log(`Prime numbers within the range ${start} to ${end} : `);
    let count = 0;
    for (var number = Math.max(start, 2); number <= end; number++) {
        let check = true;
        for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i == 0) {
                check = false;
                count++;
                break;
            }
        }
        if (check == true)
            console.log(number);
    }
    if (count != 0)
        console.log("No prime numbers in this range.");
}

//5. Factorial

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
if (number >= 1) {
    let factorial = 1;
    for (let i = 1; i <= number; i++)
        factorial *= i;
    console.log(`Factorial of ${number} : ${factorial}`);
}
else
    console.log("Number cannot be less than 1.");

//6. Prime factors

function isPrime(number) {
    let check = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            check = false;
            break;
        }
    }
    return check;
}

function getPrimeFactors(number) {
    let array = new Array();
    let i = 2;
    while (i <= number) {
        if (!(isPrime(number))) {
            if (number % i == 0) {
                array.push(i);
                number /= i;
            }
            else
                i++;
        }
        else{
            array.push(Number(number));
            break;
        }
    }
    return array;
}

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
let array = getPrimeFactors(number);
console.log(array);