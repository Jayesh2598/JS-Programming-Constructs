//1. DegF and DegC conversion

function FtoC(tempF) {
    return (tempF - 32) * 5 / 9;
}
function CtoF(tempC) {
    return (tempC * 9 / 5) + 32;
}

const prompt = require('prompt-sync')();
let temp = prompt("Enter the number : ");
let choice = prompt("Enter choice of conversion : \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius : \n");
switch (choice) {
    case '1':
        if (temp > 100 || temp < 0)
            console.log(`${temp} Celsius is out of range. Should be within 0 to 100.`);
        else
            console.log("Temperature in Fahrenheit : " + CtoF(temp));
        break;
    case '2':
        if (temp > 32 || temp < 212)
            console.log(`${temp} Fahrenheit is out of range. Should be within 32 to 212.`);
        else
            console.log("Temperature in Celsius : " + FtoC(temp));
        break;
    default:
        console.log("Enter a valid choice.");
}

//2. Palindrome check

function isPalindrome(inputNumber) {
    let reverse = 0;
    let digit = 0;
    let number = inputNumber;
    while (number > 0) {
        digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }
    if (reverse == inputNumber)
        return true;
    else
        return false;
}

const prompt1 = require('prompt-sync')();
let number1 = prompt1("Enter 1st number : ");
let number2 = prompt1("Enter 2nd number : ")
if (isPalindrome(number1))
    console.log(`${number1} is palindrome.`);
else
    console.log(`${number1} is not palindrome.`);
if (isPalindrome(number2))
    console.log(`${number2} is palindrome.`);
else
    console.log(`${number2} is not palindrome.`);

//3. Number and palindrome prime check

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

function getPalindrome(number){
    let reverse = 0;
    let digit = 0;
    while (number > 0) {
        digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reverse;
}

const prompt2 = require('prompt-sync')();
let number = prompt2("Enter a number : ");
if (!isPrime(number))
    console.log("Number is not prime.");
else {
    let palindrome = getPalindrome(number);
    console.log(`Is ${palindrome} prime? ${isPrime(palindrome)}`);
}