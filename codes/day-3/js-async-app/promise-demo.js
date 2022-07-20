
const divide = (a, b) => {
    const promiseObject = new Promise(
        function (resolveFn, rejectFn) {
            const result = a / b
            if (result === Infinity)
                rejectFn('demoinator should not be zero')

            resolveFn(result)
        }
    )
    return promiseObject
}
const divPromise = divide(12, 2)
divPromise
    .then(
        function (data) {
            console.log(data)
        },
        function (e) {
            console.log(e)
        }
    )
