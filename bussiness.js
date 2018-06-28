const employees = [
    {
        "computerID": 1,
        "employeeID": 1,
        "departmentID": 1,
        "name": "Jose"
    },
    {
        "computerID": 3,
        "employeeID": 2,
        "departmentID": 1,
        "name": "Miguel"
    }
]
console.log(employees)
console.log(employees[1].departmentID)
const name= employees[1].name
const box = document.createElement("h1")
console.log(name)
name.appendChild(box)
const computers = [
    {
        "computerID": 1
    },
    {
        "computerID": 2
    },
    {
        "computerID": 3
    }


]

const departments = [
    {
        "departmentID": 1
    },
    {
        "departmentID": 2
    },
    {
        "departmentID": 3
    }


]