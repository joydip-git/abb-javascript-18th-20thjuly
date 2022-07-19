function doesPersonExist(pid) {
    return people.find(
        function (p) {
            return p.id === pid
        }
    )
}

function getPersonIndex(pid) {
    return people.findIndex(
        function (p) {
            return p.id === pid
        }
    )
}