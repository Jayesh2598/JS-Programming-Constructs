//1. Read number and write in words

const prompt = require('prompt-sync')();
let number = prompt("Enter single digit number : ");
if (number == 1)
    console.log("One");
else if (number == 2)
    console.log("Two");
else if (number == 3)
    console.log("Three");
else if (number == 4)
    console.log("Four");
else if (number == 5)
    console.log("Five");
else if (number == 6)
    console.log("Six");
else if (number == 7)
    console.log("Seven");
else if (number == 8)
    console.log("Eight");
else if (number == 9)
    console.log("Nine");
else if (number == 0)
    console.log("Zero");
else
    console.log("Not a single digit number.");

//2. Read number and display week day

const prompt = require('prompt-sync')();
let day = prompt("Enter a day number (1-7) : ");
if (day == 1) 
    console.log("Monday");
else if (day == 2)
    console.log("Tuesday");
else if (day == 3) 
    console.log("Wednesday");
else if (day == 4) 
    console.log("Thursday");
else if (day == 5) 
    console.log("Friday");
else if (day == 6)
    console.log("Saturday");
else if (day == 7)
    console.log("Sunday");
else
    console.log("Enter an integer between [1-7].");

//3. Read a number and display Unit, Tens, Hundreds, etc

const prompt = require('prompt-sync')();
let number = prompt("Enter a number :");
if (number == 1)
    console.log("Unit");
else if (number == 10)
    console.log("Ten");
else if (number == 100)
    console.log("Hundred");
else if (number == 1000)
    console.log("Thousand");

//4. Take 3 numbers, perform operations and determine min, max

const prompt = require('prompt-sync')();
let a = prompt("Enter 1st number : ");
let b = prompt("Enter 2nd number : ");
let c = prompt("Enter 3rd number : ");
let op1 = Number(a) + (Number(b) * Number(c));
let op2 = (Number(a) % Number(b)) + Number(c);
let op3 = Number(c) + (Number(a) / Number(b));
let op4 = (Number(a) * Number(b)) + Number(c);

let minimum = op1;
let maximum = op1;

if (op2 < minimum)
    minimum = op2;
else if (op2 > maximum)
    maximum = op2;
if (op3 < minimum)
    minimum = op3;
else if (op3 > maximum)
    maximum = op3;
if (op4 < minimum)
    minimum = op4;
else if (op4 > maximum)
    maximum = op4;

console.log("Results :" + " OP1: " + op1 + " OP2: " + op2 + " OP3: " + op3 + " OP4: " + op4)
console.log("Minimum : " + minimum);
console.log("Maximum : " + maximum);