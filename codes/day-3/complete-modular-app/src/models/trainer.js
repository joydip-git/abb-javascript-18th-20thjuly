import { Person } from "./person";
export class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    print = () => {
        return `${super.print()}, ${this.subject}`
    }
}