function filterValues(arr, logicForFiltration) {
    //debugger
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]
        var isTrue = logicForFiltration(element)

        if (isTrue)
            result.push(element)
    }
    return result
}

function isEven(num) {
    //debugger
    return num % 2 === 0 ? true : false
}
function isOdd(num) {
    //debugger
    return num % 2 !== 0 ? true : false
}
var numbers = [0, 2, 1, 3, 5, 4, 7, 9, 6, 8]
//debugger
var evenNumbers = filterValues(numbers, isEven)
console.log(evenNumbers)

var oddNumbers = filterValues(numbers, isOdd)
console.log(oddNumbers)

function substringExists(name) {
    return name.indexOf('a') !== -1 ? true : false
}
var names = ['reetu', 'abhinandan', 'sonal', 'ananya', 'saurav']
var resultantNames = filterValues(names, substringExists)
console.log(resultantNames)