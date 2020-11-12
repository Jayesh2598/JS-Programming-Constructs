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