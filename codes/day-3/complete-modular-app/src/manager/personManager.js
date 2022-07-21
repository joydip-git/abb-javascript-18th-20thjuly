import { people } from "../repository/personRepository";
import { doesPersonExist, getPersonIndex } from "../utils/managerUtils";

//functionalities 
export async function addPerson(personObj) {
    var status = false
    //does the person exist
    var found = doesPersonExist(personObj.id)
    if (!found) {
        people.push(personObj)
        status = true
    }
    else {
        throw new Error('person already exists')
    }
    return status
}

export async function printInformation(arr) {
    //forEach method accepts a callback with the following signature:
    //argument(1): any type of data
    //return: void (no return value)
    if (arr.length > 0)
        arr
            .forEach(
                (p) => {
                    if (p)
                        console.log(p.print())
                }
            )
    else
        throw new Error('there is no record to display')
}

export async function updatePerson(personData, id) {
    //does the person with "id" value exists in the array
    //if does exist, get the object from the array
    var status = false
    var found = doesPersonExist(id)
    if (found) {
        found.name = personData.name
        found.salary = personData.salary
        status = true
    } else {
        throw new Error('person does not exist')
    }
    return status
}

export async function deletePerson(id) {
    //does exist? if exists then get the index position of the object from the array
    var status = false
    var foundIndex = getPersonIndex(id)
    if (foundIndex) {
        people.splice(foundIndex, 1)
        status = true
        //delete people[foundIndex]
    } else {
        throw new Error('person does not exist')
    }
    return status
}

export async function filterPeople(filterLogic) {
    if (!filterLogic)
        throw new Error('tell me what to do')
    return people.filter(filterLogic)
}