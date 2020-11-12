//1. Maximum and minumim values

let number1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number3 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number4 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number5 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let minimum = number1;
let maximum = number5;

if (number2 < minimum)
    minimum = number2;
if (number3 < minimum)
    minimum = number3;
if (number4 < minimum)
    minimum = number4;
if (number5 < minimum)
    minimum = number5;

if (number2 > maximum)
    maximum = number2;
if (number3 > maximum)
    maximum = number3;
if (number4 > maximum)
    maximum = number4;
if (number5 > maximum)
    maximum = number5;

console.log("The five numbers are : " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + ", " + number5);
console.log("Minimum : " + minimum);
console.log("Maximum : " + maximum);

//2. Checking given day between March 20 and June 20

const prompt = require('prompt-sync')();
let day = prompt("Enter day of month :");
let month = prompt("Enter month :");
let result = false;
if (month >= 3 && month <= 6) {
    if (month == 3){
        if (day >= 20 && day <= 31)
            result = true;
    }
    else if (month == 6){
        if (day >= 1 && day <= 20)
            result = true;
    }
    else if (month == 4){
        if (day >= 1 && day <= 30)
            result = true;
    }
    else if (month == 5)
        if (day >= 1 && day <= 31)
            result = true;
}
console.log(result);

//3. Leap Year check

const prompt = require('prompt-sync')();
let year = prompt("Enter year : ");
if (year >= 1000 && year <= 9999) {
    let leapYearCheck = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                leapYearCheck = true;
            else
                leapYearCheck = false;
        }
        else
            leapYearCheck = true;
    }
    else
        leapYearCheck = false;
    console.log(leapYearCheck);
}
else
    console.log("Year should be a 4 digit number.");

//4. Coin Flip
let toss = Math.floor(Math.random() * 2);
if (toss == 0)
    console.log("Heads!");
else if (toss == 1)
    console.log("Tails!");