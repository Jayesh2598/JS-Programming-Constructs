//1. Roll die

let map = new Map();
while (!([...map.values()].includes(10))) {
    let number = Math.floor(Math.random() * 6 + 1);
    console.log(number);
    if (map.has(number))
        map.set(number, map.get(number) + 1);
    else
        map.set(number, 1);
}
console.log([...map.entries()].sort());
let min = Math.min(...map.values());
let max = Math.max(...map.values());
console.log("The number which appeared max times : " + getByValue(map, max) + "=>" + max);
console.log("The number which appeared min times : " + getByValue(map, min) + "=>" + min);

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}

//2. Birth month

let monthPerson = new Map();
for (let i = 1; i <= 12; i++) {
    monthPerson.set(i, "");
}
for (let i = 1; i <= 50; i++) {
    month = Math.floor(Math.random() * 12 + 1);
    if (monthPerson.get(month) === "")
        monthPerson.set(month, i);
    else
        monthPerson.set(month, (monthPerson.get(month) + ", " + i));
}
console.log("Birth Month Map of 50 Individuals")
for (let [key, value] of monthPerson.entries()) {
    console.log(key + " => " + value);
}
