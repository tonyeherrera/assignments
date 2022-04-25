var employees = []

function Employee(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status || "Full-Time"
    employees.push(this)
    }

Employee.prototype.status = "Full-Time";   
Employee.prototype.printEmployeeForm = function(){
    console.log(this)
}

var tony = new Employee("Tony","Web Dev Student", 0, "Part-Time")
var ashley = new Employee("Ashley","Amazing Mom","Love")
var jusde = new Employee("Jude", "Crazy Kid","Candy")
// console.log(this)

 

console.log(employees)