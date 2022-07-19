//objects in JS
//object: collection of properties
//properties: value and functional properties

//c. constructor function
var joydipObj = Object.create({})
joydipObj.name = 'joydip'
joydipObj.id = 1
joydipObj.salary = 1000
joydipObj.print = function () {
    return this.name + ' ' + this.id + " " + this.salary
}
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


