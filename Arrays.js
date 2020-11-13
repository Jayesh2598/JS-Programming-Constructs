//1. Second max and min from random integers array

function findSecondMax(array) {
    let maximum = Math.max(...array);
    array.splice(array.indexOf(maximum), 1);
    return Math.max(...array);
}

function findSecondMin(array) {
    let minimum = Math.min(...array);
    array.splice(array.indexOf(minimum), 1);
    return Math.min(...array);
}

var intArray = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    intArray.push(num);
}
console.log(intArray);
console.log("Second maximum element in the array : " + findSecondMax(intArray));
console.log("Second minimum element in the array : " + findSecondMin(intArray));

//2. Sorting array and finding second max and min

var intArray = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    intArray.push(num);
}
console.log(intArray);
intArray.sort();
console.log("Second maximum element in the array : " + intArray[intArray.length - 2]);
console.log("Second minimum element in the array : " + intArray[1]);

//3. Prime factors in an array

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
    let array = [];
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

//4. Sum of numbers

function findSum(sum, num) {
    return sum + num;
}

const prompt = require('prompt-sync')();
let numArray = [];
let number1 = prompt("Enter the first number :");
let number2 = prompt("Enter the second number :");
let number3 = prompt("Enter the third number :");
numArray.push(Number(number1));
numArray.push(Number(number2));
numArray.push(Number(number3));
console.log(numArray);
console.log("Sum is " + numArray.reduce(findSum, 0));

//5. Numbers with repeated digits

function isSameDigits(number){
    return number % 10 == Math.floor(number / 10);
}

const prompt = require('prompt-sync')();
let lower = prompt("Enter lower limit : ");
let upper = prompt("Enter upper limit : ");
var array = [];
for(let i = lower; i <= upper; i++){
    if(isSameDigits(i))
        array.push(i);
}
console.log(array);