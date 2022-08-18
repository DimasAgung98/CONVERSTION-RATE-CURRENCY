function test() {
    var a = 1;
    var b = 2;

    console.log(`a awal = ${a}`)
    console.log(`b awal = ${b}`)

    //SOLUTION

    a -= b; // a = a - b || a = 1 - 2 = -1
    b += a; // b = b + a || b = 2 + -1 = 1
    a = b - a // a = 1 -(-1) = 2

    console.log(`a final = ${a}`)
    console.log(`b final = ${b}`)
}




test();