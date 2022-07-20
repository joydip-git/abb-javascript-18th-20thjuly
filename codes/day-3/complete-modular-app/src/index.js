
//Crud
import { addPerson, deletePerson, updatePerson, filterPeople, printInformation } from "./manager/personManager";
import { Trainee } from "./models/trainee";
import { Trainer } from "./models/trainer";

(async () => {
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
    (
        async () => {
            var anilObj = new Trainer('anil', 1, 1000, 'JavaScript')
            var sunilObj = new Trainee('sunil', 2, 2000, 'JS Frameworks')
            try {
                const status1 = await addPerson(anilObj)
                console.log(status1)
                const status2 = await addPerson(sunilObj)
                console.log(status2)
            } catch (error) {
                console.log(error.message)
            }
        }
    )()

// const obj = {
//     name: 'anil',
//     id: 1
// }

// const nameValue = obj.name
// const idValue = obj.id
//object destructuring
// const { name: nameValue, id: idValue } = obj
// console.log(nameValue)
// console.log(idValue)

// const mainModuleExportsObj = require('./main')=>{add:add}
//console.log(mainModuleExportsObj.add(10, 20))
//const { add } = require('./main')//=>{add:add}

//ES6 import keyword
// import { add } from "./main";
// console.log(add(10, 20))
*/