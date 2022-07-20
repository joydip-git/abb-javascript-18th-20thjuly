import { Person } from "./person";
export class Trainee extends Person {
    constructor(name, id, salary, domain) {
        super(name, id, salary)
        this.domain = domain
    }
    print = () => {
        return `${super.print()}, ${this.domain}`
    }
}