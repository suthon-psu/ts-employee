import Worker from './Worker'

export class FullTime extends Worker {
    salary: number

    constructor(name: string, salary: number){
        super(name)
        this.salary  = salary
    }

    getExpense(): number {
        return this.salary
    }
}