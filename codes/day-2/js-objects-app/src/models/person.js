class Person {
    constructor(pname, pid, psalary) {
        this.name = pname
        this.id = pid
        this.salary = psalary
    }
    print() {
        return this.name + ' ' + this.id + " " + this.salary
    }
}