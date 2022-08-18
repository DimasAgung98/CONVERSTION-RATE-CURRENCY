

let aab = [];

for (let abc = 1; abc <= 100; abc++) {
    let aaa = 0;
    for (let bbb = 1; bbb <= abc; bbb++) {
        if (abc % bbb == 0) {
            aaa = aaa + 1
        }
    }
    if (aaa == 2) {
        aab = [...aab, abc];
    }
}

console.log({ aab });


// let prima = [];

// for (let i = 1; i <= 100; i++) {
//     let pembagi = 0;
//     for (let a = 1; a <= i; a++) {
//         if (i % a == 0) {
//             pembagi = pembagi + 1
//         }
//     }

//     if (pembagi == 2) {
//         prima = [...prima, i]
//     }
// }

// console.log({ prima });