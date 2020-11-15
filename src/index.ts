import Company from "./Company"
import { FullTime } from "./FullTime"
import PartTime from "./PartTime"

let pt1 = new PartTime("Facus", 500)
pt1.work(10)
pt1.work(5)

let employees = [
    new FullTime('Plub', 50000),
    new FullTime('Sofron', 40000),
    new FullTime('Korn', 5000),
    pt1
]

let company = new Company('Bonmek', employees)
company.calculateExpenses()

