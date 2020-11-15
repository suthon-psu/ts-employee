export default abstract class Worker {
    readonly name: string

    constructor(name: string){
        this.name = name
    }

    abstract getExpense(): number 
}