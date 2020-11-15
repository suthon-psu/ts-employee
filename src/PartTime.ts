export default class PartTime {
    readonly name: string
    readonly rate: number

    hours = 0

    constructor(name: string, rate: number){
        this.name = name
        this.rate = rate
    }

    work(hours: number){
        this.hours += hours
    }

    getExpense(): number {
        return this.hours * this.rate
    }
}