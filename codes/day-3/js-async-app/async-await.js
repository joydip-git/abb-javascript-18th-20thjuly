
//const divide = async (a, b) => {
async function divide(a, b) {
    const res = a / b
    if (res === Infinity)
        throw new Error('demoinator should not be zero')
    return res
}

//caveate: await keyword can be used only inside a function which is declared with async
//IIFE 
(async function () {
    try {
        const result = await divide(12, 2)
        console.log(result)
    } catch (e) {
        console.log(e.message)
    }
})()




console.log('end of code')