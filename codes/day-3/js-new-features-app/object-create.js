var obj = {
    name: 'anil',
    id: 1,
    salary: 1000
}

//this method does not create a copy of an existing object
//rather it creates another fresh object which inherits from the existing object (existing object acts as a prototype)
var newInheritedObj = Object.create(obj)
newInheritedObj.print = function () {
    return this.name
}
console.log(newInheritedObj)
console.log(newInheritedObj.print())