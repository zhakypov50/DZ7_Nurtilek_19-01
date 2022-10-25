////////// task 1
class worker {
    constructor(name, surname, rate, days)  {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary() {
        console.log(this.rate * this.days)
    }
}
const workerdata = new worker("Nurtilek", "Zhakypov", "460", "26")
console.log(workerdata.name)
console.log(workerdata.surname)
console.log(workerdata.rate)
console.log(workerdata.days)
workerdata.getSalary()

///////// task 2
class worker2 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getRate() {
        return this.rate;
    }
    getDays() {
        return this.days;
    }
    getSalary() {
        console.log(this.rate * this.days)
    }
}
const workerdata2 = new worker2('Нуртилек', 'Жакыпов', 460, 26);
console.log(workerdata2.getName());
console.log(workerdata2.getSurname());
console.log(workerdata2.getRate());
console.log(workerdata2.getDays());
workerdata2.getSalary()
