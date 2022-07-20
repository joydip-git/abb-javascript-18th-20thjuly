//this below object directly inherits from prototype object of the Object function
var obj1 = {
    name: 'anil',
    id: 1,
    salary: 1000
}
var obj2 = {
    location: 'bangalore'
}

var obj3 = {}

//changing prototype (base) object of obj3

//1. directly updating using __proto__ property
//obj3.__proto__ = obj1

//2. using setPrototypeOf method (from Object function's prototype)
Object.setPrototypeOf(obj3, obj1)
console.log(obj3.__proto__)
// var copyObj = {}

// for (var propName in obj) {
//     var propValue = obj[propName]
//     copyObj[propName] = propValue
// }

//spread operator (...)
var copyObj = { ...obj1, ...obj2 }
console.log(copyObj)

var numbers1 = [1, 2, 3, 4]
var numbers2 = [5, 6, 7, 8]
//var copyArr = numbers1.concat(numbers2)
var copyArr = [...numbers1, ...numbers2]
console.log(copyArr)

var util1 = {
    add: function (a, b) {
        return a + b
    }
}

var util2 = {
    subtract: function (a, b) {
        return a - b
    }
}

var masterUtil = {
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    },
    ...util1,
    ...util2
}

//mix-in (Mixin)
var masterUtil = Object.assign({}, util1, util2)
//Object.assign(masterUtil, util1, util2)

console.log(masterUtil)

