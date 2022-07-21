import { people } from "../repository/personRepository";

export function doesPersonExist(pid) {
    return people.find(
        function (p) {
            return p.id === pid
        }
    )
}

export function getPersonIndex(pid) {
    return people.findIndex(
        function (p) {
            return p.id === pid
        }
    )
}