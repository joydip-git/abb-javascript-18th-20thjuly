var toContinue = 'n'
do {
    showChoices()
    var choice = takeUserInput("Make a choice[1/2/3/4]: ", '0', true)

    var firstValue = takeUserInput('enter 1st value', '0', true)
    var secondValue = takeUserInput('enter 2nd value', '0', true)

    var calcResult = calculate(choice, firstValue, secondValue)

    // if (calcResult !== undefined) {
    if (calcResult !== undefined) {
        window.alert('result: ' + calcResult)
    } else {
        window.alert('wrong choice entered')
    }

    toContinue = takeUserInput('Would you like to continue?[y/Y/n/N]', 'n')

    if (toContinue === 'Y' || toContinue === 'N')
        toContinue = toContinue.toLocaleLowerCase()

} while (toContinue !== 'n' && toContinue === 'y')
