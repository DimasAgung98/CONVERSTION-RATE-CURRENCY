const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Filter dengan cara Imperative
let filteredArray1 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        filteredArray1.push(numbers[i]);
    }
}


// Filter dengan cara Declarative
let filteredArray2 = numbers.filter(function (item) {
    return item > 5;
});


console.log(filteredArray1);
console.log(filteredArray2);