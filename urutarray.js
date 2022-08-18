const data = [1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0, 2, 2, 2, 4, 6, 2, 4, 7, 4]

let dataArray = [];

for (let i = 0; i < data.length; i++) {
    let hasil = false;

    for (let a = 0; a < dataArray.length; a++) {
        if (data[i] == dataArray[a]) {
            hasil = true;
        }
    }

    if (!hasil) {
        dataArray = [...dataArray, data[i]];
    }
}

console.log(dataArray);