//objects in JS
//object: collection of properties
//properties: value and functional properties

//d. class keyword (ES6-2015)
//class members are by default public
//in constructor, declare data members (value properties) and assign them with values
//methods (functional properties) are better to be written separately (not inside the constructor)
//all members of class should be accessed within the class using "this" keyword
class Person {
    constructor(pname, pid, psalary) {
        this.name = pname
        this.id = pid
        this.salary = psalary
        //return this
    }
    //methods
    // print = function () {
    print() {
        return this.name + ' ' + this.id + " " + this.salary
    }
    // call() {
    //     this.print()
    // }
}

var joydipObj = new Person('joydip', 1, 1000)
var anilObj = new Person('anil', 2, 2000)

console.log(joydipObj)
//access value properties of JS
//using dot operator (.)
console.log(joydipObj.name)
//using indexer ([])
console.log(joydipObj['salary'])

//access and invoke the functional properties of JS
var info = joydipObj.print()
console.log(info)

//objects are dynamic
//you can dynamically extend the existing object by adding extra properties (value or functional)
joydipObj.location = 'Bangalore'
joydipObj['department'] = 'Training'
joydipObj.show = function () {
    return 'hello'
}

//iterate through a JS object (like you iterate an array)
for (var propName in joydipObj) {
    var propValue = joydipObj[propName]
    console.log(propName + ":" + propValue)
}

//since array is also a type of object, the index numbers becomes the properties here
var names = ['abc', 'def', 'mno']
for (var indexNumber in names) {
    console.log(indexNumber + ':' + names[indexNumber])
}