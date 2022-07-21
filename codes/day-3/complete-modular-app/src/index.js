import { addPerson, deletePerson, updatePerson, filterPeople, printInformation } from "./manager/personManager";
import { Trainee } from "./models/trainee";
import { Trainer } from "./models/trainer";
import { people } from "./repository/personRepository";

(async () => {

    //Crud
    var anilObj = new Trainer('anil', 1, 1000, 'JavaScript')
    var sunilObj = new Trainee('sunil', 2, 2000, 'JS Frameworks')

    await addPerson(anilObj)
    await addPerson(sunilObj)

    //cRud
    var filteredPeople = await filterPeople(function (p) {
        return p.salary > 1000
    })
    await printInformation(filteredPeople)

    //crUd
    await updatePerson({ name: 'anil kumar', salary: 1500 }, 1)

    //cruD
    //deletePerson(2)

    //cRud
    await printInformation(people)
    // console.log(people)
})()

/*
//object destructuring:

const obj = {
    name: 'anil',
    id: 1
}

// const nameValue = obj.name
// const idValue = obj.id

or 

const { name: nameValue, id: idValue } = obj
console.log(nameValue)
console.log(idValue)

//example: using object destructuring whil importing module

//common js format
const mainModuleExportsObj = require('./main')=>{add:add}
console.log(mainModuleExportsObj.add(10, 20))
const { add } = require('./main')//=>{add:add}

//ES6 module format: import keyword
import { add } from "./main";
console.log(add(10, 20))

*/
