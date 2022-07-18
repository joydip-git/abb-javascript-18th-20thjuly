//var keyword is used to declare variables, which will be the name of memory blocks to store values, such as 10 and 20 and 30 (below code) in x, y and result respectively
var x = 10
var y = 20
//+ is an operator (arithmatic)
var result = x + y

//console object reprsenting the browser console
//log is the built-in function(method) of console object
//you must pass the value to print in that log() method
console.log(typeof result)

//following three types of values: string (collection of characters), fractional numerical value, boolean
var personName = 'Joydip'
var salary = 1000.45
var sessionStarted = true
var joydipObj = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    location: 'bangalore'
};
var numbers = [1, 2, 3, 4]
function show() {

}

console.log(typeof personName)
console.log(typeof salary)
console.log(typeof sessionStarted)
console.log(typeof joydipObj)
console.log(typeof numbers)
console.log(typeof show)

var a = 10 //10-->'10'
var b = 0
var res = a / b
console.log(typeof res)

var m = undefined
var n = 10
var r = m + n
console.log(typeof r)
console.log(typeof m)
//console.log(m.toString())
m = 12
console.log(typeof m)
console.log(typeof (m.toString()))


//different types of data available of JavaScript: data types
/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. object
 * 5. function
 * 6. undefined
 */

//keywords, but not a data-type
/**
 * NaN keyword (not a data type)
 * Infinity (keyword, but not a data type)
 */

/*
number a = 10
number f = 12.34F
boolean b = false
string c = 'a'
string str = "joydip"
object joydipObj={......}
number[] numbers=[1,2,3,4]
etc.
*/

function add(a, b) {
    console.log(a + b)
}

//add(10,20)
add(10, 20)

//operators:
//1. arithmetic: +, -, *, /, %, ++, --
//2. logical: &&, ||, !
//3. comparison: ==, ===, !=, !==, >, <, >=, <= 
//x==y (checking whether value of x and y are same or not)
//x===y (strict equal: checking whether value of x and y are same or not as well as both of them are of similar data type or not)
//x!==y (strict not-equal/unequal)


//x = x + 1
// console.log(++x)
// console.log(x++)
// console.log(--y)
// console.log(y--)


//unary: working on single operand. ++, --, +=, -=, *=, /=
//x++ //(x=x+1)

//assignment operators
// =  -> var x = 10
// += -> x+=10 (x=x+10)

//binary operators: working two operands
//+, -, /, etc.
//var res = x+y

//ternary operators: ?:
// assign the greater value to a variable
//var var-name = (expression-to-evaluate)?true-value:false-value
var greaterValue = x > y ? x : y
console.log(greaterValue)

//expressions
var first = 10
var second = 20

//one time execution based on whether condition is satisfied or not
if (first > second) {
    console.log(first)
} else {
    console.log(second)
}

//executing something repeatatively based on condition (as long as it is satisfied)
while (first > 5) {
    console.log(first)
    first--
}

//executing something repeatatively based on condition (as long as it is satisfied). but here, checking the condition later, not at the initial stage

do {
    console.log(second)
    second--
} while (second > 15)

for (var i = 0; i < 5; i++) {
    console.log('hello')
}

