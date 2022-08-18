
let uangAwal = 750000;
let uangAndi = uangAwal;
let jumlahUang = "";
let profit = "";

for (let i = 1; i <= 12; i++) {
    let bunga = 0;
    let menabung = 0;
    if (i > 1) {
        bunga = uangAndi * 0.06;
        if (uangAndi + bunga > 800000) {
            menabung = 800000 * 0.03;
        } else {
            menabung = (uangAndi + bunga) * 0.03
        }
    }
    jumlahUang += `Uang Andi : ${uangAndi.toFixed(0)} \n bunga : ${bunga.toFixed(0)} \n menabung : ${menabung.toFixed(0)} \n uang bulan ke ${i} : ${((uangAndi + bunga) - menabung).toFixed(0)} \n-----------------\n`
    uangAndi = (uangAndi + bunga) - menabung;
}

profit = uangAndi - uangAwal;
console.log(jumlahUang);
console.log(`Profit yang didapatkan andi : ${profit.toFixed(0)}`)


