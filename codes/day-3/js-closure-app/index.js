var m = 300
function outer() {
    //this.a = 100
    var a = 100
    console.log(a + m)
    function inner() {
        //this.b = 200
        var b = 200
        // console.log(this.a + this.b)
        console.log(a + b + m)
    }
    //inner()
    return inner
}
var innerFn = outer()
innerFn()
console.log(window)

/*
function foo1() {
    var p = 200
}
function foo2() {
    var n = 100
}
*/

//JS creates and maintains a lexical scope for a function, which gives access to all its outer scopes. even after the outer scopes have been destroyed and after that inner function has been invoked. stil the inner will have access to the outer scopes, since that lexical environment is maintained. this is known as closure
//CLOSURE IS ABOUT MAINTAINING LOCAL VARIABLES OF OUTER SCOPES FOR A INNER FUNCTION. ITS NOT ABOUT OBJECT DATA OF THOSE FUNCTIONS.

function applyStyle() {
    if (document.getElementById('radio1').checked) {
        var resizeTextFn = resize(1)
        resizeTextFn()
    }
    if (document.getElementById('radio2').checked) {
        var resizeBtnFn = resize(2)
        resizeBtnFn()
    }
}
function resize(option) {
    var width = 300
    var height = 50
    var fnRef = undefined
    switch (option) {
        case 1:
            const resizeText = function () {
                var textBox = document.getElementById('txt1')
                textBox.setAttribute('style', `width:${width}px;height:${height}px`)
                console.log(height)
            }
            fnRef = resizeText
            break;
        case 2:
            const resizeButton = function () {
                var button = document.getElementById('btn1')
                button.setAttribute('style', `width:${width}px;height:${height}px`)
                console.log(width)
            }
            fnRef = resizeButton
            break;
        default:
            break;
    }
    return fnRef
}