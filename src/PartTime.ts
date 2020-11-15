import Worker from './Worker'

export default class PartTime extends Worker{    
    readonly rate: number

    hours = 0

    constructor(name: string, rate: number){
        super(name)
        this.rate = rate
    }

    work(hours: number){
        this.hours += hours
    }

    getExpense(): number {
        return this.hours * this.rate
    }
}