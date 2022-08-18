
let prima = [];
let noprima = [];

for (let i = 1; i <= 100; i++) {
    let pembagi = 0;
    for (let a = 1; a <= i; a++) {
        if (i % a == 0) {
            pembagi = pembagi + 1
        }
    }

    if (pembagi == 2) {
        prima = [...prima, i];
    } else {
        noprima = [...noprima, i];
    }
}

console.log({ prima, noprima });