/*
function outer() {
    console.log(this)
    this.a = 100
    //1.
    //var ref = this
    let inner = function () {
        console.log(this)
        this.b = 200
        //console.log(ref.a + this.b)
        console.log(this.a + this.b)
    }
    //2.
    //inner = inner.bind(this)
    inner()
}
new outer()
//console.log(window)
*/
function outer() {
    console.log(this)
    this.a = 100
    let inner = () => {
        console.log(this)
        this.b = 200
        console.log(this.a + this.b)
    }
    inner()
}
new outer()

const add = function (a, b) {
    return (a + b)
}
const subtract = (a, b) => {
    return (a - b)
}
const mutiply = (a, b) => a * b