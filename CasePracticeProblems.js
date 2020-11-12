//1. Print a single digit number in words

const prompt = require('prompt-sync')();
let number = prompt("Enter a single digit number : ");
switch (number) {
    case '1':
        console.log("One");
        break;
    case '2':
        console.log("Two");
        break;
    case '3':
        console.log("Three");
        break;
    case '4':
        console.log("Four");
        break;
    case '5':
        console.log("Five");
        break;
    case '6':
        console.log("Six");
        break;
    case '7':
        console.log("Seven");
        break;
    case '8':
        console.log("Eight");
        break;
    case '9':
        console.log("Nine");
        break;
    case '0':
        console.log("Zero");
        break;
    default:
        console.log("Invalid entry.");
}

//2. Read number and display week day

const prompt = require('prompt-sync')();
let day = prompt("Enter a day number (1-7) : ");
switch (day) {
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    case '7':
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//3. Read a number and display Unit, Tens, Hundreds, etc

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
switch (number) {
    case '1':
        console.log("Unit");
        break;
    case '10':
        console.log("Ten");
        break;
    case '100':
        console.log("Hundred");
        break;
    case '1000':
        console.log("Thousand");
        break;
    default:
        console.log("Invalid number");
}

//4. Conversion of number in different units

const prompt = require('prompt-sync')();
let number = prompt("Enter a number :");
console.log("1. Feet to Inch \n2. Feet to Meter \n3. Inch to Feet \n4. Meter to Feet");
let choice = prompt("Enter conversion choice :");
switch (choice) {
    case '1' : 
        console.log(number * 12);
        break;
    case '2' : 
        console.log(number * 0.3048);
        break;
    case '3' :
        console.log(number / 12);
        break;
    case '4' : 
        console.log(number / 0.3048)
        break;
    default:
        console.log("Invalid choice.");
}