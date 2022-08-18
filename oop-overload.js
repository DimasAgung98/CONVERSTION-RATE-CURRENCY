//oop-overload.js

// Buat kelas parent
class Kendaraan {
    constructor(nama, kecepatan, bahanBakar) {
        this.nama = nama;
        this.kecepatan = kecepatan;
        this.bahanBakar = bahanBakar;
    }

    gas() {
        this.kecepatan += 5;
        console.log(`Vroom!, kecepatan ${this.kecepatan}.`);
    }

    isi() {
        console.log(`Mau ngisi ${this.bahanBakar} dulu!`);
    }
}

// Buat kelas child yang menginduk ke parent
class MobilListrik extends Kendaraan {
    constructor(nama, kecepatan, bahanBakar) {
        super(nama, kecepatan, bahanBakar);
    }

    // Overload, nama method sama, parameter beda
    gas(tambahanKecepatan) {
        this.kecepatan += tambahanKecepatan;
        console.log(`Vroom!, kecepatan ${this.kecepatan}.`);
    }

    // Override, nama method & parameter sama
    isi() {
        super.isi();
        console.log("Sampai charged 100% ya!");
    }
}

let motorku = new Kendaraan("Yamaha", 0, "Pertamax");
motorku.gas();
motorku.isi();

let mobilku = new MobilListrik("Tesla", 0, "Baterai");
mobilku.gas(45);
mobilku.isi();