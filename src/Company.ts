import { FullTime } from "./FullTime"
import PartTime from "./PartTime"

export default class Company {
    readonly title: string
    employees: (FullTime | PartTime)[]

    constructor(title: string, employees: (FullTime | PartTime)[]){
        this.title = title
        this.employees = employees
    }

    calculateExpenses(){
        let expenses = this.employees.reduce((total, current) => 
                total + current.getExpense(), 0)

        console.log(`= ${expenses}`)
    }
}