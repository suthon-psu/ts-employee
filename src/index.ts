import Company from "./Company"
import { Employee } from "./Employee"
import PartTime from "./PartTime"

let pt1 = new PartTime("Facus", 500)
pt1.work(10)
pt1.work(5)

let employees = [
    new Employee('Plub', 50000),
    new Employee('Sofron', 40000),
    new Employee('Korn', 5000),
    pt1
]

let company = new Company('Bonmek', employees)
company.calculateExpenses()

