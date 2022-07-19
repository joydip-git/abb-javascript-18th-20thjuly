function person(name, id, salary) {
    //console.log(this)
    this._name = name;
    this._id = id;
    this._salary = salary;
}
person.prototype.print = function () {
    return this._name + ' ' + this._salary
}
function trainer(name, id, salary, subject) {
    // this._name = name;
    // this._id = id;
    // this._salary = salary;
    person.call(this, name, id, salary)
    this._subject = subject
}
trainer.prototype.print = function () {
    console.log('trainer prototype')
    //console.log(this)
    //return this._name + ' ' + this._salary + ' ' + this._subject
    var partialInfo = person.prototype.print.apply(this)
    return partialInfo + ' ' + this._subject
}
var anilObj = new trainer('anil', 1, 1000, 'JavaScript')
var info = anilObj.print()
console.log(info)