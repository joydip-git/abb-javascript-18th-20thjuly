function takeUserInput(message, defaultValue, convert = false) {
    var temp = window.prompt(message, defaultValue)
    if (convert) {
        var value = Number(temp)
        return value
    }
    return temp;
}

function showChoices() {
    window.alert("1. Add 2. Subtract 3. Multiply 4. Divide")
}

function calculate(calcChoice, first, second) {
    var result
    switch (calcChoice) {
        case 1:
            result = add(first, second)
            break;

        case 2:
            result = subtract(first, second)
            break;

        case 3:
            result = multiply(first, second)
            break;

        case 4:
            result = divide(first, second)
            break;

        default:
            result = undefined
            break;
    }
    return result
}