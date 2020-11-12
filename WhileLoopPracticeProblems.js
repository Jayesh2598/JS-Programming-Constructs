//1. Print powers of 2

const prompt = require('prompt-sync')();
let n = prompt("Enter the value :");
let count = 1;
let power = 1;
while (power <= 256 && count <= n) {
    console.log(power);
    power = power * 2;
    count++;
}

//2. Magic number

const prompt = require('prompt-sync')();
let number = prompt("Enter a number (1-100) :");
let start = 1;
let end = 100;
let mid = (start + end) / 2;
while (mid != number) {
    if (number < mid) {
        end = mid;
        mid = Math.floor((start + end) / 2);
    }
    else if (mid < number) {
        start = mid;
        mid = Math.floor((start + end) / 2);
    }
}
console.log(`The number selected is : ${mid}`);

//3. Extend toss to win 11 times

let noOfTosses = 0;
let headCount = 0;
let tailCount = 0;
while (headCount != 11 && tailCount != 11) {
    let toss = Math.floor(Math.random() * 2);
    if (toss == 0) 
        headCount++;
    else if (toss == 1) 
        tailCount++;
    noOfTosses++;
}
console.log(`No of tosses required: ${noOfTosses}. Heads : ${headCount}, Tails: ${tailCount}`);

//4. Gambler bets till Rs.200 or broke

let noOfBets = 0;
let amount = 100;
let noOfBetsWon = 0;
let noOfBetsLost = 0;
while (amount < 200 && amount > 0) {
    let betResult = Math.floor(Math.random() * 2);
    if (betResult == 0) {
        amount--;
        noOfBetsLost++;
    }
    else if (betResult == 1) {
        amount++;
        noOfBetsWon++;
    }
    console.log(amount);
    noOfBets++;
}
console.log(`No of bets required: ${noOfBets}. Bets won: ${noOfBetsWon}. Bets lost: ${noOfBetsLost}`);