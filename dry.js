class Worker {
    constructor(hoursWorked, rate) {
        this.hoursWorked = hoursWorked;
        this.rate = rate
        this.TAX = 10;
    }
    basicSalary() {
        return this.hoursWorked * this.rate;
    }
    overviewSalary() {
        return this.basicSalary() + this.TAX
    }
}

const dimas = new Worker(50, 10)
console.log(dimas.basicSalary());
console.log(dimas.overviewSalary());
