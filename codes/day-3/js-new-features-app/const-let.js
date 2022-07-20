function foo() {
    //console.log(x) //error
    let x = 100 //declaration and assignemnt
    //x = 100
    console.log(x)//?100
    for (let i = 0; i < 2; i++) {
        let x = 20 //declaration and assignemnt
        //x = 20
        console.log(x)//?20
    }
    console.log(x)//?100
}
// function foo() {
//     console.log(x) //?
//     var _x
//     _x = 100
//     console.log(x)//?
//     for (var i = 0; i < 2; i++) {
//         var x //declaration    
//         x = 20
//         console.log(_x)//?
//     }
//     console.log(x)//?
// }
foo()

const a = 100
//a = 'hello'
var res = a.toExponential(2)
console.log(res)

const arr = [1, 2, 3, 4]
//arr = []
arr.push(10)
console.log(arr)