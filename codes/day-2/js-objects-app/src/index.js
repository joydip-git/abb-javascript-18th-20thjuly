//Crud
var anilObj = new Person('anil', 1, 1000)
var sunilObj = new Person('sunil', 2, 2000)

addPerson(anilObj)
addPerson(sunilObj)

//cRud
var filteredPeople = filterPeople(function (p) {
    return p.salary > 1000
})
printInformation(filteredPeople)

//crUd
updatePerson({ name: 'anil kumar', salary: 1500 }, 1)

//cruD
//deletePerson(2)

//cRud
//printInformation(people)
// console.log(people)
