// function person(name, id, salary) {
//     this._name = name;
//     this._id = id;
//     this._salary = salary;
// }
// person.prototype.print = function () {
//     return this._name + ' ' + this._salary
// }
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
console.log(person.prototype)
//debugger
var anilObj = new person('anil', 1, 1000)
console.log(anilObj)
var info = anilObj.print()
console.log(info)

