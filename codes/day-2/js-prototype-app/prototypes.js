function foo(msg) {
    this.message = msg
    // this.hasOwnProperty = function (propName) {
    //     console.log('calling HOP')
    //     var exists = false
    //     for (var prop in this) {
    //         console.log(prop)
    //         if (prop === propName) {
    //             exists = true
    //             break
    //         }
    //     }
    //     return exists
    // }
    // this.show = function () {
    //     console.log('foo property show')
    // }
    console.log('hello')
}

var fooProtoType = foo.prototype
// fooProtoType.show = function () {
//     console.log('foo property in prototype object of foo function')
// }
Object.prototype.show = function () {
    console.log('foo property in prototype object of Object function')
}
console.log(Object.prototype)
console.log(fooProtoType.__proto__)

var obj = new foo('hello')
console.log(foo.prototype)
console.log(obj.__proto__)

obj.show()
console.log(obj.hasOwnProperty('show'))
console.log(fooProtoType.hasOwnProperty('show'))
console.log(Object.prototype.hasOwnProperty('show'))