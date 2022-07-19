//functionalities 
function addPerson(personObj) {
    var status = false
    //does the person exist
    var found = doesPersonExist(personObj.id)
    if (!found) {
        people.push(personObj)
        status = true
    }
    return status
}
function printInformation(arr) {
    //forEach method accepts a callback with the following signature:
    //argument(1): any type of data
    //return: void (no return value)
    if (arr.length > 0)
        arr
            .forEach(
                function (p) {
                    if (p)
                        console.log(p.print())
                }
            )
}
function updatePerson(personData, id) {
    //does the person with "id" value exists in the array
    //if does exist, get the object from the array
    var status = false
    var found = doesPersonExist(id)
    if (found) {
        found.name = personData.name
        found.salary = personData.salary
        status = true
    }
    return status
}
function deletePerson(id) {
    //does exist? if exists then get the index position of the object from the array
    var status = false
    var foundIndex = getPersonIndex(id)
    if (foundIndex) {
        people.splice(foundIndex, 1)
        status = true
        //delete people[foundIndex]
    }
    return status
}
function filterPeople(filterLogic) {
    return people.filter(filterLogic)
}