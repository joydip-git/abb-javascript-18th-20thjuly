'use strict'
//function main(){
function foo() {
    console.log(this)
    this.a = 100
    this.show = function () {
        console.log(this.a)
    }
}
//window.foo()
//foo()
var fooObj = new foo()
console.log(fooObj)
fooObj.show()
console.log(window)
//}
//main()
