//heart and soul of any scripting language: function
//IIFE (Immediately Invocable Function Expression) -iify
// (function () {
//     console.log('hello to functions')
// })()

sayHello('Joydip') //function can be called before the declaration

//function declaration syntax
function sayHello(name) {
    if (name)
        console.log('Hello ' + name)
    else
        console.log('Hello stranger')
}
sayHello()

//sayHi() //function should not be called before the expression

//function expression syntax
var sayHi = function (name) {
    if (name)
        return 'Hi ' + name
    else
        return 'Hi stranger'
}
sayHi('anil')

//do not return multiple comma-separated values
// function X() {
//     return 1, 2, 3, 4
// }

// console.log(X())


