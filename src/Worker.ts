export default class Worker {
    readonly name: string

    constructor(name: string){
        this.name = name
    }

    getExpense(): number { 
        return 0
    }
}