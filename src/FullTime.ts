export class FullTime {
    readonly name: string
    salary: number

    constructor(name: string, salary: number){
        this.name = name
        this.salary  = salary
    }

    getExpense(): number {
        return this.salary
    }
}