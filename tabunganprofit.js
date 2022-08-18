let uangAwal = 1000000000;
let uangRian = uangAwal;
let totalUangRian = "";
let profit = "";

for (let i = 1; i <= 12; i++) {
    let bunga = 0;
    if (i > 1) {
        bunga = uangRian * 0.025;
    }

    totalUangRian += `Tabungan Awal : ${uangRian.toFixed(0)} \n Bunga : ${bunga.toFixed(0)} \n Tabungan Rian bulan ke ${i} : ${(uangRian + bunga).toFixed(0)} \n`;

    uangRian = uangRian + bunga;

}

profit = uangRian - uangAwal;

console.log(totalUangRian);
console.log(`Jumlah profit yang didapatkaan rian: ${profit.toFixed(0)}`)