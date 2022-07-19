var numbers = [0, 2, 1, 3, 5, 4, 7, 9, 6, 8]
var isEven = function (num) { return num % 2 === 0 }
var isOdd = function (num) { return num % 2 !== 0 }

var found = numbers.find(
    function (num) {
        return num === 4
    }
)
console.log(found)
var foundIndex = numbers.findIndex(
    function (num) {
        return num === 4
    }
)
console.log(foundIndex)
var evenResult = numbers.filter(isEven)
var oddResult = numbers.filter(isOdd)
var multiNumbers = numbers.map(
    function (element) {
        return element * 5
    }
)
console.log(evenResult)
console.log(oddResult)
console.log(multiNumbers)

function sortInAscendingOrder(a, b) {
    return b - a
}
function sortInDescendingOrder(a, b) {
    return a - b
}
/*
function sortArray(arr, sortLogic) {
    for (var index = 0; index < arr.length; index++) {
        for (var j = index + 1; j < arr.length; j++) {
            //var diff = arr[i] - arr[j]
            var diff = sortLogic(arr[index], arr[j])
            if (diff > 0) {
                var temp = arr[index]
                arr[index] = arr[j]
                arr[index] = temp
            }
            if (diff < 0) {
                var temp = arr[j]
                arr[j] = arr[index]
                arr[index] = temp
            }
        }
    }
    return arr
}
*/
//pass a callback function to sort method with following signature:
//arguments: two elements
//return: integer value (0 => two elements are same, >0 => first element is greater than second and <0 => second element is greater than the first element)
var choice = 2 //1 or 2
//var sortedArray = undefined
switch (choice) {
    case 1:
        numbers.sort(
            function (a, b) {
                return a - b
            }
        )
        //sortedArray = sortArray(numbers, sortInAscendingOrder)
        break;

    case 2:
        numbers.sort(
            function (a, b) {
                return b - a
            }
        )
        //sortedArray = sortArray(numbers, sortInDescendingOrder)
        break;

    default:
        numbers.sort(
            function (a, b) {
                return a - b
            }
        )
        //sortedArray = sortArray(numbers, sortInAscendingOrder)
        break;
}
//console.log(sortedArray)
console.log(numbers)

//numbers.splice()