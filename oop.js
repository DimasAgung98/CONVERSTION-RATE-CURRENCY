// buat sebuah kelas
class Karyawan {
    constructor(jamkerja, gaji) {
        this.jamkerja = jamkerja;
        this.gaji = gaji;
        this.tax = 10;
    }
    gajiKaryawan() {
        return this.jamkerja * this.gaji;
    }
    potonganGaji() {
        return this.gajiKaryawan() - this.tax;
    }
}

//buat sebuah object dengan kelas Karyawan
let dimas = new Karyawan(20, 10);

console.log(dimas.gajiKaryawan());
console.log(dimas.potonganGaji());


// // Buat sebuah kelas
// class Kendaraan {
//     constructor(nama) {
//         this.nama = nama;
//     }

//     klakson() {
//         console.log(`Beep! ${this.nama} mau lewat`);
//     }
// }

// // Buat sebuah object dengan kelas Kendaraan
// let bmw = new Kendaraan("BMW");

// // Jalankan method yang ada dalam kelas
// bmw.klakson();