//'use strict'
//function main(){
// function person(name, id, salary) {
//     //console.log(person.arguments)
//     this.name = name
//     this.id = id
//     this.salary = salary
// }
// person.prototype.print = function () {
//     var info = `${this.name},${this.id},${this.salary}`
//     return info
// }
class person {
    constructor(name, id, salary) {
        //console.log(person.arguments)
        this.name = name
        this.id = id
        this.salary = salary
    }
    // print = function () {
    //     var info = `${this.name},${this.id},${this.salary}`
    //     return info
    // }
    print = () => {
        var info = `${this.name},${this.id},${this.salary}`
        return info
    }
}
var anilPersonObj = new person('anil', 1, 1000)

//situation-1:
//var anilInfo = anilPersonObj.print()

//situation-2:
//the print() in this case will be bound to window object
// var printFnRef = person.prototype.print
//or
//var printFnRef = anilPersonObj.print

//you need to manually bind the print() to anilPersonObj by calling the bind() method of JS and passing the address of anilPersonObj as an argument
//the bind() method returns the same function, but bound to anilPersonObj (means this property refers to anilPersonObj)
//var printFnRef = person.prototype.print.bind(anilPersonObj)
//var printFnRef = person.prototype.print.bind(anilPersonObj)
//or
//var printFnRef = anilPersonObj.print.bind(anilPersonObj)
//var anilInfo = printFnRef()
//console.log(anilInfo)

// var someOtherObj = {
//     name: 'sunil',
//     id: 2,
//     salary: 2000
// }
//var printFnRef = person.prototype.print.bind(someOtherObj)
//console.log(anilInfo)
//}
//main()

var sunilPersonObj = new person('sunil', 2, 2000)

var people = [anilPersonObj, sunilPersonObj]

const printInfo = function (fnRef) {
    var info = fnRef()
    console.log(info)
}
people
    .forEach(
        (p) => printInfo(p.print)
    )

