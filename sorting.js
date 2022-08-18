const data = [3, 10, 15, 2, 6];
console.log(` data lama : ${data}`);

let dataBaru = data.sort(function (a, b) {
    return b - a;
})

console.log(`data baru : ${dataBaru}`);
