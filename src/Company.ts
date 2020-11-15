import Worker from "./Worker"

export default class Company {
    readonly title: string
    employees: Worker[]

    constructor(title: string, employees: Worker[]){
        this.title = title
        this.employees = employees
    }

    calculateExpenses(){
        let expenses = this.employees.reduce((total, current) => 
                total + current.getExpense(), 0)

        console.log(`= ${expenses}`)
    }
}