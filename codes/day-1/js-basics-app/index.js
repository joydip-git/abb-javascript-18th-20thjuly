//expressions
var first = 10
var second = 20

//one time execution based on whether condition is satisfied or not
if (first > second) {
    console.log(first)
} else {
    console.log(second)
}

//executing something repeatatively based on condition (as long as it is satisfied)
while (first > 5) {
    console.log(first)
    first--
}

//executing something repeatatively based on condition (as long as it is satisfied). but here, checking the condition later, not at the initial stage

do {
    console.log(second)
    second--
} while (second > 15)

for (var i = 0; i < 5; i++) {
    console.log('hello')
}

var sortChoice = 'price'
switch (sortChoice) {
    case 'id':
        console.log('sort by id')
        break;

    case 'name':
        console.log('sort by name')
        break;

    case 'price':
        console.log('sort by price')
        break;

    default:
        console.log('sort by id')
        break;
}
