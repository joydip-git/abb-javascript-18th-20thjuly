class person {
    constructor(name, id, salary) {
        this._name = name;
        this._id = id;
        this._salary = salary;
        // this.print = function () {
        //     return this._name + ' ' + this._salary
        // }
    }
    print() {
        return this._name + ' ' + this._salary
    }
}
class trainer extends person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this._subject = subject
    }
    print() {
        var partialInfo = super.print()
        return partialInfo + ' ' + this._subject
    }
}
// console.log(person.prototype)
// var anilObj = new person('anil', 1, 1000)
// console.log(anilObj)
// var info = anilObj.print()
// console.log(info)

var anilObj = new trainer('anil', 1, 1000, 'JavaScript')
var info = anilObj.print()
console.log(info)