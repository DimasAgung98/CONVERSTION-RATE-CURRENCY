//andi menabung bulan 1 = 750.000
//bunga bulan 2 = 6%
//menyisihkan tabungan sebanyak 3% dari jumlah tabungan

//buat variabel uang andi
let uangAndi = 750000;
let total = "";

// buat i<=12 karena dalam 1 tahun ada 12 bulan
for (let i = 1; i <= 12; i++) {
    //deklrasikan bunga
    let bunga = 0;
    let sisihkan = 0;
    //karena bunga masuk pada bulan ke 2
    if (i > 2) {
        bunga = uangAndi * 0.06;
        if (uangAndi + bunga > 800000) {
            sisihkan = 800000 * 0.03;
        } else {
            sisihkan = (uangAndi + bunga) * 0.03;
        }
    }

    total += `tabungan awal: ${uangAndi.toFixed(0)} \n bunga: ${bunga.toFixed(0)} \n sisihkan: ${sisihkan.toFixed(0)} \n uang bulan ke ${i} : ${((uangAndi + bunga) - sisihkan).toFixed(2)} \n `;

    uangAndi = (uangAndi + bunga) - sisihkan;
}

console.log(total);