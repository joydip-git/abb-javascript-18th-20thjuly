//this array in the function argument list is used to accept any number of parameters (rest of the parameters). to declare that as an arry we use (...). it is known as rest operator
//you can declare only argument with rest operator (as an array) in the argument list of a function
//that should be the last in the argument list
function calculateAverage(name, ...numbers) {
    var average = 0
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    average = sum / numbers.length
    //return name + ' has got an average of ' + average
    //string interpolation or templated string
    return `${name} has got an average of ${average}`
}

console.log(calculateAverage('anil', 10, 20))
console.log(calculateAverage('sunil', 10, 20, 30))
console.log(calculateAverage('joydip', 10, 20, 30, 40))

//var sentence = window.prompt('enter a sentence', '')
//I am consultant, i work for ABB
//I am consultant, i work for ABB. I am in Bangalore, ECity.
// function splitSentence(str, separators) {

// }
// splitSentence('asjhs, jgjhG. AJKSA', '.', '', ',')