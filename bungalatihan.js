//INISIASI UANG DIMAS
let uangDimas = 1000000
let totalUangDimas = "";

//PENGULANGAN UNTUK TABUNGAN SELAMA 12 BULAN (1 TAHUN)
for (let i = 1; i <= 12; i++) {
    let bunga = 0;
    let tabungan = 0;
    if (i > 1) {
        bunga = uangDimas * 0.05;
        if (uangDimas + bunga) {
            tabungan = (uangDimas + bunga) * 0.03;
        }
    }

    totalUangDimas +=
        `Tabungan Awal : ${uangDimas.toFixed(0)} \n
    bunga : ${bunga.toFixed(0)} \n
    tabungan : ${tabungan.toFixed(0)} \n
    uang bulan ke ${i} : ${((uangDimas + bunga) - tabungan).toFixed(0)} \n`;

    uangDimas = ((uangDimas + bunga) - tabungan);
}
console.log(totalUangDimas)