//function main(){
//foo()
//function declaration
var m
console.log(m)
m = 200
console.log(m)
//this.n = 300

//foo1()
//function expression
var foo1
foo1 = function () {
    console.log('hello')
}
foo1()

foo()
function foo() {
    console.log(x) //?
    var x
    x = 100
    console.log(x)//?
    for (var i = 0; i < 2; i++) {
        var x //declaration
        x = 20 //assignment
        console.log(x)//?
    }
    console.log(x)//?
}
foo()
//1-undefined,3-100,6-20,8-20

//hoisting => registering the local variables and function declarations (not expressions) in the variable object during JS's creation/preparation phase (when function is called) is known as hoisting
//local variables when hoisted, they are undefined
//all function declarations, when hoisted, refers to the function immediately (that's why they can be invoked even before the declaration during execution phase) here the function itself is hoisted
//in case of function expression, the variable is hoisted with value undefined, not the function itself

//all local variable declarations are moved up in a JS function (global or any other): variable hoisting=> registering the local variables
//all function declarations also moved up : function hoisting
//Note: FUNCTION EXPRESSIONS ARE NOT HOISTED, ONLY FUNCTION DECLARATIONS ARE HOISTED


//}
//main()